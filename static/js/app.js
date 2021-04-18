// validacion para el login

//Validacion del login
function validateLogin() {
  
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    // const pattern = new RegExp('^[A-Z]+$', 'i');  /^(?=.\d)(?=.[A-Za-z])[0-9A-Za-z¡@#$%&?¿!]{8,16}$/
    const pattern = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,14}$/);
    
    
    if (username.length == 0  || username== "") {
      alert('El campo email es necesario, por favor verifiquelo');
      return false;
    }
    
    
    if(password =="") {
        alert('El campo password es requerido');
        return false;
    }
    // if(password.length < 9) {
    //     alert('digite minimo 9 caracteres');
    //     return false;
    // }
    if (!pattern.test(password)){
            alert('El campo Contraseña debe tener entre 6 y 14 caracteres que contengan al menos un dígito numérico , una letra mayúscula y una minúscula'); 
            return false;
    }

}

//Validacione del registro sign_in
function validasign_in(){
   
    let name = document.getElementById("name").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let country = document.getElementById("country").value;
    let city = document.getElementById("city").value;
    let password = document.getElementById("password").value;
    let roll = document.getElementById("roll").selectedIndex;
    const pattern = new RegExp('^[A-Z]+$', 'i');
    const vemail = new RegExp(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/);
    const vpassword = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,14}$/);
    
    //value name
    if (name.length == 0  || name== "") {
        alert('Digite el campo nombre');
        return false;
      }
    if (!pattern.test(name)){
       alert('El campo nombre debe contener solo texto'); 
       return false;
    }

    //Value lastname
    if (lastname.length == 0  || lastname== "") {
        alert('Digite el campo apellido');
        return false;
      }
    if (!pattern.test(lastname)){
       alert('El campo apellido debe contener solo texto'); 
       return false;
       //value email
    }
    if (!vemail.test(email)){
        alert('Verifique que el campo email sea correcto'); 
        return false;
     }
     // value country
     if (!pattern.test(country)){
        alert('Verifique el campo Pais'); 
        return false;
     }
     // value city
     if (!pattern.test(city)){
        alert('Verifique el campo Ciudad'); 
        return false; 
     }
     //Value password
     if (!vpassword.test(password)){
        alert('El campo password no tiene los caracteres requeridos'); 
        return false;
     }
    
     if (roll == null || roll == 0 ){
      alert('Por favor selecciona tu rol'); 
      return false;
     }
     
   
     
}


//Validacion addProperty
function validaaddProperty(){

   let cityP = document.getElementById("cityP").value;
   let countryP = document.getElementById("countryP").value;
   let adressP = document.getElementById("adressP").value;
   let ubicationP = document.getElementById("ubication").value;
   let roomNumber = document.getElementById("roomNumber").value;
   let imageP = document.getElementById("imageP").value;
   let imageMain = document.getElementById("imageMain").value;
   let priceDay = document.getElementById("priceDay").value;
   let Description = document.getElementById("Description").value;
   const pattern = new RegExp('^[A-Z]+$', 'i');
   const url = new RegExp(/^http\:\/\/|https\:\/\/|www\.google$/);
debugger; 


//Validacion de ciudad
   if (cityP.length == 0  || cityP == "") {
      alert('Digite el campo Ciudad');
      return false;
    }
    if (!pattern.test(cityP)){
      alert('El campo Ciudad solo debe contener texto'); 
      return false;
    }
//Validacion de pais
    if (countryP.length == 0  || countryP == "") {
       alert('Digite el campo Pais');
       return false;
    }
    if (!pattern.test(countryP)){
       alert('El campo Pais solo debe contener texto'); 
       return false;
    }
//Validacion de la dirección
    if (adressP.length == 0  || adressP == "") {
       alert('El campo Dirección debe estar diligenciado');
       return false;
    }

    if (ubicationP == null  || ubicationP == "") {
      alert('Verifique ubicación');
      return false;
    } 
    if (!url.test(ubicationP)){
      alert('Verifique el campo ubicación'); 
      return false;
    }
      //Validacion de numero de habitaciones
    if (roomNumber == 0  || roomNumber == "") {
       alert('Debe diligenciar el numero de habitaciones');
       return false;
    } 
   
    
    if (priceDay == 0 || priceDay == ""){
       alert('Digite Valor por noche');
       return false;
    }
    if (Description.length == 0  || Description == "") {
      alert('Digite la descripción de la propiedad');
      return false;
    }
      


}



