import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class SportsService {

    private _data: any;
    private _sports: any;
    public _usuario:any;

    constructor(private http: Http) {
        this.http.get("http://localhost:8080/sports.json")
            .subscribe(
                res => {
                    this._data = res.json();
                },
                error => {
                    console.log(error);
                }
            );
    }


    get data(): any {
        return this._data;
    }

    get usuario():any{
        return this._usuario;
    }

    set usuario(usuario:any){
        this._usuario = usuario;
    }

    set sports(sports: any) {
        this._sports = sports;
    }

    get sports(): any {
        return this._sports;
    }

}
