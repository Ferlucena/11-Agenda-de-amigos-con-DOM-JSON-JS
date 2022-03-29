/* BUSINESS LOGIC */
//Create an array to host all data from form
var friendlist = [];

//creating a function to add new friend y JSON format
function addfriendtolist(pname,plast,pwhat) {
  var newfriend = {
    nombre : pname,
    apellido : plast,
    whtp : pwhat
  };
console.log(friendlist);
  
  //Adding new friend to the friend's list
friendlist.push(newfriend);
  
}

//Getting dates
function getfriendlist() {
  return addfriendtolist;
}



