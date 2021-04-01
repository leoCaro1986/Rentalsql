// validacion para el login


function validar() {
    debugger;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    const pattern = new RegExp('^[A-Z]+$', 'i');

    if (username.length == 0  || username== "") {
      alert('Campo vacio');
      return false;
    }
    if (!pattern.test(username)){
       alert('digite solo letras'); 
       return false;
    }
    if(password.length < 9) {
        alert('digite minimo 9 caracteres');
        return false;
    }
    if(password =="") {
        alert('El campo password es requerido');
        return false;
    }

}



