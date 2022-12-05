
// simulador de cajero automatico


//parte del login 


let savedPIN = "989796";

function login() {
    let ingresar= false; 

    for (let i = 2; i >= 0; i--){
        let userPIN = prompt("ingresa tu pin ");
        if(userPIN == savedPIN){
            alert("ingreso exitoso");
            ingresar = true;

            break;
            
        }else{
            alert("error te quedan " + i + " oportunidades");
        }
    }
    return ingresar;
}
//console.log(login());



let exito= login();
if(exito){
    //dentro de la cuenta 

    let saldo = 35000;


    let opcion = prompt("elegi una opcion: \n1- Saldo. \n2- Retiro de dinero. \n3 - Deposito \nPresiona x para finalizar. ");



    while(opcion != "X" && opcion != "x"){
    switch (opcion) {

        case "1":
            alert("tu saldo es $" + saldo);
            break;


            case "2":   
            let retiro= parseInt(prompt("ingresa el monto a retirar"))
    
            if(retiro<= saldo){
                saldo = saldo - retiro; 
                alert("retiraste $"+ retiro + ", tu nuevo saldo es $" + saldo);
            }else{
                alert("saldo insuficiente anda a trabajar crack ");
            }
                break;
    
    
    
            case "3":
                let deposito= parseInt(prompt("ingresa el monto a depositar"));
                saldo = saldo + deposito;
                alert("tu nuevo saldo es $ " + saldo);
                 
                 break;  
        
             
        default:
            alert("opcion no valida");
            break;
        
        }

        opcion = prompt("elegi una opcion: \n1- Saldo. \n2- Retiro de dinero. \n3 - Deposito \nPresiona x para finalizar. ");
    
    }
}else{
    alert("retuvimos tu tarjeta comunicate al 123 y rogale a dios de recuperar la tarjeta XD ")

}

alert("gracias por usar nuestros servicios vuelva prontos ")
 
