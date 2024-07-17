const gasolina = {
    llenartanque(){
        this.nivelCombustible += 10
    },
    usarCombustible(){
        this.nivelCombustible -= 10
    }
}
export default gasolina;