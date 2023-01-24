class Egreso extends Dato{
    static cantidadEgresos=0;
    constructor(descripcion, valor){
        super(descripcion, valor);
        this._id = ++Egreso.cantidadEgresos;
    }

    get id(){
        return this._id;
    }
}