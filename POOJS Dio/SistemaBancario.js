class contabancaria {
    constructor (agencia, numero){
        this.agencia = agencia
        this.numero = numero
        this.tipo = ""
        this._saldo = 0 
    }

    get saldo() {
        return this._saldo
    }
    set saldo(valor) {
        this._saldo = valor
    }

    sacar(valor) {
        if (this._saldo < valor){
            return "operação negada"
        }else{
            this._saldo = this._saldo - valor
            return this._saldo
        }
    }

    depositar(valor){
        this._saldo += valor
        return this._saldo
    }
}

class contaCorrente extends contabancaria {
    constructor (agencia, numero, cartao){
        super(agencia, numero)
        this.tipo = "Conta Corrente"
        this._cartao = cartao
    }
    get cartao() {
        return this._cartao
    }
    set cartao(valor){
        this._cartao = valor
    }

}

class contaPoupanca extends contabancaria {
    constructor (agencia, numero){
        super(agencia, numero)
        this.tipo = "conta pupança"

    }
}

class contaUniversitaria extends contabancaria{
    constructor(agencia, numero){
        super(agencia, numero)
        this.tipo = "Universitária"
    }

    sacar(valor){
        if(valor>500){
            return "operação negada"
        }
        this._saldo = this._saldo - valor
        return this._saldo
    }
}