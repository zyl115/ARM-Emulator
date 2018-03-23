//////////////////////////////////////////////////////////////////////////////////////////
//                                    DCD/EQU/FILL
//////////////////////////////////////////////////////////////////////////////////////////
module EQUFILL

    open CommonData
    open CommonLex
    open TokenizeOperandsV2


    type EQUCode = EQU|FILL
    let opcodeMap = 
        Map.ofList ["EQU",EQU;"FILL",FILL]

    type Instr =  {Opcode:EQUCode;
                   Value:uint32;
                   Cond:Condition
    }


    /// parse error (dummy, but will do)
    type ErrInstr = string

    /// map of all possible opcodes recognised

    let opCodes = 
        [("EQU",(EQUC,("EQU","",Cal)));("FILL",(EQUC,("FILL","",Cal)))]
        |>Map.ofList


    let FILLEQUparse (ls: LineData) : Result<Parse<Instr>,string> option =
        let (WA la) = ls.LoadAddr
        let parse' (instrC, (root,suffix,pCond)) =
              let oprands = ls.Operands|>splitStrIntoList|>ParseFILLEQUOps root ls
              match oprands,ls.Label with
              |_,None -> Error "No Label found"
              |Ok op,_ -> 
                  

                  Ok { 
                     PInstr={Opcode=opcodeMap.[root];
                             Value=op;
                             Cond = pCond
                     }; 
                     PLabel = 
                        match root with 
                        |"FILL" -> ls.Label |> Option.map (fun lab -> lab, la) 
                        |"EQU" -> ls.Label |> Option.map (fun lab -> lab, op) 
                        |_ -> failwithf "will not happen";
                     
                     PSize =op/4u; 
                     PCond = pCond }
               |Error k,_ -> Error k

        Map.tryFind ls.OpCode opCodes
        |> Option.map parse'
    /// Parse Active Pattern used by top-level code
    let (|IMatch|_|)  = FILLEQUparse

    let execFILL startAddr (instr:Instr) (dataPath:DataPath<'INS>)= 
        
        let n = instr.Value
        match n with
        |0u -> dataPath
        |_ -> 
            [0u..4u..n-4u]
            |>List.map (fun addr -> (WA (startAddr+ uint32 addr),DataLoc 0u)) 
            |>updateRec dataPath.MM
            |>fun k -> {dataPath with MM = k}
        
