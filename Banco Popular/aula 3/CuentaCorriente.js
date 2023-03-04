import { Cliente } from "./Cliente.js";

export class CuentaCorriente
{
    #cliente;
    numero;
    sucursal;
    #saldo;
    static cantidadCuentas = 0;
    
    set cliente(valor) {
        if (valor instanceof Cliente)
            this.#cliente = valor;
    }

    get cliente() {
        return this.#cliente;
    }


    constructor(cliente,numero,sucursal){
        this.cliente = cliente;
        this.numero = numero;
        this.sucursal = sucursal;
        this.#saldo = 0;
        CuentaCorriente.cantidadCuentas++;
    }

    depositoEnCuenta(valor) {
        if (valor >= 0)
        this.#saldo += valor
        return this.#saldo;
    }

    retirarDeCuenta(valor){
        if (valor <= this.#saldo)
        this.#saldo -= valor;
        return this.#saldo; 
    }

    verSaldo(){
        return this.#saldo;
    }

    transferirParaCuenta(valor, cuentaDestino){
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
        //return cuentaDestino.#saldo;
    }
}