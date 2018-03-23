const registers = [
    'R0', 'R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7',
    'R8', 'R9', 'R10', 'R11', 'R12', 'R13', 'R14', 'R15', 
    ];

var element = $('#reg');

registers.forEach(function (r) {
    var newTr = $('<tr></tr>');
    var newTd = $('<td></td>');
    var newDiv = $('<div class="btn-group full-width"></div>');
    var newButton;
    if (r === 'R14') {
        newButton = $("<button class='btn btn-reg'> LR </button>");
    } else if (r === 'R15') {
        newButton = $("<button class='btn btn-reg'> PC </button>");
    } else {
        newButton = $("<button class='btn btn-reg'>" + r + "</button>");
    }
    
    var secButton = $("<button id='" + r + "' class='btn btn-reg-con'> 0x00 </button>");
    newDiv.append(newButton);
    newDiv.append(secButton);
    newTd.append(newDiv);
    newTr.append(newTd);
    element.append(newTr);
});

var modal = $('#memModal');
var memBtn = $('#memory');
var span = $('.close');

var symtabmodal = $('#symtabmodal');
var symtabButton = $('#symtab-button');

symtabButton.click(function () {
    symtabmodal.css('display', 'block');
});

span.click(function () {
    symtabmodal.css('display', 'none');
});


memBtn.click(function () {
    modal.css('display', 'block');  
});

span.click(function () {
  modal.css('display', 'none');  
});

window.onclick = function (event) {
  if (event.target === modal) {
      modal.css('display', 'none');
  } else if (event.target === symtabmodal) {
      mod
  }
};




/*
$('#R2').click(function () {
    console.log('Hello World!');
});
*/

/*const electron = require('electron');
const BrowserWindow = electron.remote.BrowserWindow;*/



/*win.on('closed', function() {
   win = ; 
});*/

/*
$('#memory').click(function() {
    console.log("Show modal window");

    var child = new BrowserWindow({
        modal: true,
        show: false,
        width: 800,
        height: 600
    });
    
    child.loadURL("file://" + __dirname + "/modal.html");
    child.on('ready-to-show', function () {
        child.show();
    });
});*/
