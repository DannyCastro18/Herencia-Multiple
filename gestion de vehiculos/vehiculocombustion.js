import gasolina from "./gasolina.js";

class VehiculoCombustion{
    constructor(nivelCombustible){
        this.nivelCombustible = nivelCombustible
        Object.assign(this, gasolina)
    }
   
}
export default VehiculoCombustion;