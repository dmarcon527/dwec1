function notificarDatosBien() {
    Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
            let notification = new Notification(document.title, {
                body: `Está todo correcto \n ${String.fromCodePoint(0x1F609)}`,
                icon: "favicon.ico"
            });
        } else {
            alert(`No está correcto \n ${String.fromCodePoint(0x1F611)}`)
        }
    });
}
 
 function comprobarContra(){
    document.querySelector('#enviar').addEventListener("click", ()=>{
     let contra1= document.querySelector('#password'); 
     let contra2= document.querySelector('#repitPassw'); 
     if(contra1==contra2){
         document.querySelector('#repitPassw').classList.add("correcto");
     }else{
        document.querySelector('#repitPassw').classList.add("incorrecto");
     }
    }); 
 }

 function comprobarEmail(){
    document.querySelector('#enviar').addEventListener("click", ()=>{
        const patronEmail= /.+@gmail\.com/; 
        let e=document.querySelector('#email').value;
    if(!patronEmail.test(e)){ 
    document.querySelector('#email').classList.add("incorrecto");
}else{
    document.querySelector('#email').classList.add("correcto");
}
 }); 
}

 function noCopy(evt) {
    evt.preventDefault();//corta el evento
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
        
        document.querySelectorAll('#password, #repitPassw').forEach(e => {
            e.addEventListener("copy", noCopy);
            e.addEventListener("paste", noCopy);
        });

         
        document.querySelector('#enviar').addEventListener("click", ()=>{
            comprobarEmail(); 
            comprobarContra(); 
            notificarDatosBien();
    }); 

    }); 



