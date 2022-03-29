/*UI LOGIC*/
//button getting datas from the form through adding click event
var queryform = document.querySelector('#idbtnregister')
queryform.addEventListener('click', registerfriend);
printdata();

function registerfriend() {
  var fname = document.querySelector('#idName').value,
      flast = document.querySelector('#idLast').value,
      fwht = document.querySelector('#idWht').value;

//Calling addfriendtolist and write form data inside it

addfriendtolist(fname,flast,fwht);
printdata();  
}

function printdata() {
  var list = getfriendlist();
  var tbody = document.querySelector('#friendstable tbody');
  
  tbody.innerHTML = '';

  for (var i = 0; i < list.length; i++) {
    var row = tbody.insertRow(i),
        namecell = row.insertCell(0),
        apellidocell = row.insertCell(1),
        whatsappcell = row.insertCell(2);
//Inserting data in cells
    namecell.innerHTML = friendlist[i].nombre;
    apellidocell.innerHTML = friendlist[i].apellido;
    whatsappcell.innerHTML = friendlist[i].whtp;


    tbody.insertRow(i).insertCell(0).innerHTML = list[i].nombre;

    tbody.appendChild(row);
  }
}
