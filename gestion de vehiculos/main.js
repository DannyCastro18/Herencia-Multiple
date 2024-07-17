import VehiculoHibrido from "./vehiculohibrido.js";

let vHibrido = new VehiculoHibrido();

vHibrido.mostrarEstado();
vHibrido.velectrico.cargarBateria();
vHibrido.mostrarEstado();