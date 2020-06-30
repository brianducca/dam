export class Dispositivo{
    private _dispositivoId: number;
    private _nombre: string; 
    private _ubicacion: string;
    private _electrovalvulaId: number;

    constructor(dispositivo,nombre,ubicacion,electrovalvulaId){
        this._dispositivoId=dispositivo;
        this._nombre=nombre;
        this._ubicacion=ubicacion;
        this._electrovalvulaId=electrovalvulaId;
    }

    public get dispositivoId(): number {
        return this._dispositivoId;
    }
    public set dispositivoId(value: number) {
        this._dispositivoId = value;
    }

    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }

    public get ubicacion(): string {
        return this._ubicacion;
    }
    public set ubicacion(value: string) {
        this._ubicacion = value;
    }
    
    public get electrovalvulaId(): number {
        return this._electrovalvulaId;
    }
    public set electrovalvulaId(value: number) {
        this._electrovalvulaId = value;
    }
}