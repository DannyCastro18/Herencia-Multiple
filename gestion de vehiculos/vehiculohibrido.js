import VehiculoCombustion from "./vehiculocombustion.js";
import vehiculoElectrico from "./vehiculoelectrico.js";

class VehiculoHibrido{
    constructor(){
        this.velectrico = new vehiculoElectrico(50)
        this.vcombustion = new VehiculoCombustion(36)
    }
    mostrarEstado(){
       console.log (`El nivel de bateria es de: ${this.velectrico.nivelBateria} y el nivel de combustible es de: ${this.vcombustion.nivelCombustible}`)
    }
}
export default VehiculoHibrido;