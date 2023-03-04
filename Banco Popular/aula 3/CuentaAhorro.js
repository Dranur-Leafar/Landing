export class CuentaAhorro {
    
    #cliente;
    #saldo;
    
    constructor(cliente, numero, saldo, sucursal) 
    {
        this.#cliente = cliente;
        this.numero = numero;
        this.#saldo = saldo;
        this.sucursal = sucursal;
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