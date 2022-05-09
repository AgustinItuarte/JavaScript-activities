let user = ["miguel", "pepe",];
let passwd = ["123", "@1234"];

function validate()
{
    var username = document.getElementById("usuario").value;
    var password = document.getElementById("contraseña").value;
	var user_logged = false
       user.forEach(function(item, i, arr){
           if (user[i] == username && passwd[i] == password){
               user_logged = true
           }      
       })
	   if (user_logged == true)
	   {
		alert("Usuario logueado.");   
	   }
	   else
       {
		alert("Usuario incorrecto.");
       }
}

function register_user()
{
    var username = document.getElementById("usuario").value;
    var password = document.getElementById("contraseña").value;
    user.push(username);
    passwd.push(password);
    alert("Registro completo");
}


function reset_passwd()
{
    var username = document.getElementById("usuario").value;
    var password = document.getElementById("contraseña").value;
    var new_password = document.getElementById("nueva_contraseña").value;
   
       user.forEach(function(item, i, arr){
           if (user[i] == username && passwd[i] == password){
               passwd[i] = new_password;
               alert("Nueva contraseña : " + passwd[i]);
           }
       })
}

function delete_user()
{
    var username = document.getElementById("usuario").value;
    var password = document.getElementById("contraseña").value;
   
       user.forEach(function(item, i, arr){
           if (user[i] == username && passwd[i] == password){
               delete user[i];
               delete passwd[i];
               alert("El usuario ha sido eliminado.");
           }
       })
}