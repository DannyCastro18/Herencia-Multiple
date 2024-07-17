const bateria =  {
    cargarBateria(){
        this.nivelBateria += 20
    },
    usarBateria(){
        this.nivelBateria -=20
    }
}
export default bateria;