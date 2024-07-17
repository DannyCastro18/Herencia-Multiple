import batery from "./batery.js";


class vehiculoElectrico {
    constructor(nivelBateria){
        this.nivelBateria = nivelBateria
        Object.assign(this, batery)
    }
}
export default vehiculoElectrico;