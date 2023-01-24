class Ingreso extends Dato{
    static cantidadIngresos=0;
    constructor(descripcion, valor){
        super(descripcion,valor);
        this._id=++Ingreso.cantidadIngresos;
    }

    get id(){
        return this._id;
    }
}