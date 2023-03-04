

  /*function fecha(){ 
   const fechaCliente = document.querySelector(".entrada").value; 
   const fechaClienteD = new Date(fechaCliente) 
   const fechaActual = new Date();
   const diferenciaFechas = ((fechaActual-fechaClienteD) /24/60/60/1000)/365;
   console.log(Math.round(diferenciaFechas));

}
  }
*/

  let fecha = () => {
   const fechaCliente = document.querySelector(".entrada").value; 
   const fechaClienteD = new Date(fechaCliente) 
   const fechaActual = new Date();
   const diferenciaFechas = ((fechaActual-fechaClienteD) /24/60/60/1000)/365;
   console.log(Math.round(diferenciaFechas));

if (diferenciaFechas >= 18) {
    alert("Eres mayor de Edad tienes "+ Math.round(diferenciaFechas) + " años")
}
else {alert("Eres menor de Edad...largo")
  }
}

const input = document.querySelector("[data-input]");
input.addEventListener("blur", fecha);