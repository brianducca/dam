export class Log{
    private _logRiegoId: number;
    private _fecha: Date; 
    private _apertura: boolean;
    private _electrovalvulaId: number;


constructor(logRiegoId:number, fecha:Date, apertura:boolean, electrovalvulaId:number) {
    this._apertura = apertura;
    this._electrovalvulaId = electrovalvulaId;
    this._fecha = fecha;
    this._logRiegoId = logRiegoId;

    }

    public set apertura(apertura:boolean) {
        this._apertura = apertura;
    }

    public set electrovalvulaId(electrovalvulaId:number) {
        this._electrovalvulaId = electrovalvulaId;
    }

    public set fecha(fecha:Date) {
        this._fecha = fecha;
    }

    public set logRiegoId(logRiegoId:number) {
        this._logRiegoId = logRiegoId;
    }

    public get apertura():boolean {
        return this._apertura;
    }

    public get electrovalvulaId():number {
        return this._electrovalvulaId;
    }

    public get fecha():Date {
        return this._fecha;
    }

    public get logRiegoId():number {
        return this._logRiegoId;
    }

}