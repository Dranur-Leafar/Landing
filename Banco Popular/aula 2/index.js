class Cliente
{
    nombre;
    dni;  
    rfc;
}

class cuentaCorriente
{
    saldo;
    numero;
    sucursal;

    depositoEnCuenta(valor) {
        this.saldo += valor
    }
}


const cliente1 = new Cliente();
cliente1.nombre = "Leonardo";
cliente1.dni = "123456";
cliente1.rfc = "rucr840927qh4"

const cuentaCorriente1 = new cuentaCorriente();
cuentaCorriente1.numero = "123456";
cuentaCorriente1.saldo = 1000;
cuentaCorriente1.sucursal = "Metepec"


const cliente2 = new Cliente();
cliente2.nombre ="Maria";
cliente2.dni = "4563728";
cliente2.rfc = "humb123456"

const cuentaCorriente2 = new cuentaCorriente();
cuentaCorriente2.numero = "321123";
cuentaCorriente2.saldo = 500;
cuentaCorriente2.sucursal = "Asuncion"



const cliente3 = new Cliente();
cliente3.nombre ="Pedro";
cliente3.dni = "4563728";
cliente3.rfc = "HAH2154Q785"

const cuentaCorriente3 = new cuentaCorriente();
cuentaCorriente3.numero = "321123";
cuentaCorriente3.saldo = 2500;
cuentaCorriente3.sucursal = "Lerma"
cuentaCorriente3.depositoEnCuenta(200);




console.log(cliente1);
console.log(cuentaCorriente1);
console.log(cliente2);
console.log(cuentaCorriente2);
console.log(cliente3);
console.log(cuentaCorriente3);

