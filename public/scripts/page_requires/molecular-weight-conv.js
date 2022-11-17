import socket from "../requires/socket.js";
socket.on('connection');

var formula = $('.formula');
var calculate = $('.calculate');
var table = $('.table-body');
var weight = $('.weight');

calculate.click(() => {
  if (formula.val() == ""){
    emptyTable();
    return;
  }

  socket.emit('calculate', formula.val());
});

socket.on('calculated', (data)=>{
  weight.val(data.weight);

  emptyTable();
  fillTable(data.molecules);
});

socket.on('calculation-error', ()=>{
  alert("Please check the input");
});

function emptyTable(){
  table.html("");
};

function fillTable(molecules){
  for(var i = 0; i < molecules.length; i++)
  {
    let molecule = molecules[i];
    let row = $((document.createElement('tr')));

      let atom = $((document.createElement('td')));
      atom.html(molecule.atom);

      let mass = $((document.createElement('td')));
      mass.html(molecule.mass);

      let submass = $((document.createElement('td')));
      submass.html(molecule.submass);

    row.append(atom);
    row.append(mass);
    row.append(submass);

    table.append(row);
  }
};
