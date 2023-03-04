class Cliente
{
    nombreCliente;
    dniCliente;  
    rfcCliente;
}

class cuentaCorriente{
    saldo;
    numero;
    sucursal;
}


const cliente1 = new Cliente();
const nombreCliente = "Leonardo";
const dniCliente = "123456";

const cuentaCorriente1 = new cuentaCorriente();
const numeroCuenta = "123456";
const saldoCuenta = 1000;



const cliente2 = new Cliente();
cliente2.nombreCliente ="Maria";
cliente2.dniCliente = "4563728";

const cuentaCorriente2 = new cuentaCorriente();
cliente2.numeroCuenta = "321123";
cliente2.saldoCuenta = "500";



const cliente3 = new Cliente();
cliente3.nombreCliente ="Pedro";
cliente3.dniCliente = "4563728";

const cuentaCorriente3 = new cuentaCorriente();
cliente3.numeroCuenta = "321123";
cliente3.saldoCuenta = "2500";


console.log(cliente1);
console.log(cuentaCorriente1);
console.log(cliente2);
console.log(cuentaCorriente2);
console.log(cliente3);
console.log(cuentaCorriente3);

