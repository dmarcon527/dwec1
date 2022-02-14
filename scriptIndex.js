 function comprobarContra(){
     let contra1= document.querySelector('#password').values; 
     let contra2= document.querySelector('#repitPassw').values; 
     if(contra1!=contra2){
         alert("Las contraseñas no son iguales.")
     }
 }

window.addEventListener("DOMContentLoaded", () => {
    document.querySelector('#password').addEventListener("input",() => {
            const letramay = new RegExp("(?=.*?[A-Z])");
            const letramin = new RegExp("(?=.*?[a-z])");
            const digito = new RegExp("(?=.*?[0-9])");
            const especial = new RegExp("(?=.*?[=#?!@$%^&*-])");
            const longitud = new RegExp(".{8,}");
            const p = document.querySelector('#password').value;
            let expresiones = [letramay, letramin, digito, especial, longitud];
            console.log(expresiones);
            let valido = true;
            
            expresiones.forEach((v, k) => {
                console.log(v.test(p));
                if (!v.test(p)) {
                    valido = false;
                    document.querySelector(`li:nth-child(${k + 1})`).classList.add("incorrecto");
                    document.querySelector(`li:nth-child(${k + 1})`).classList.remove("correcto");
                } else {
                    document.querySelector(`li:nth-child(${k + 1})`).classList.add("correcto");
                    document.querySelector(`li:nth-child(${k + 1})`).classList.remove("incorrecto");
                }
            
            
            }); 
            
            if (!valido) {
                document.querySelector('#password').classList.add("incorrecto");
                document.querySelector('#password').classList.remove("correcto");
            }
            else {
                document.querySelector('#password').classList.remove("incorrecto");
                document.querySelector('#password').classList.add("correcto");
            }
    
        });

        document.querySelector('#enviar').addEventListener("click", ()=>{
            let email = document.getElementById("#email"); 
            if (!email.checkValidity()){ //si la validación es incorrecta
                alert("email incorrecto"); 
                return false;
                }else{
                    return true; 
                }
                
                comprobarContra; 
        }); 
    }); 



