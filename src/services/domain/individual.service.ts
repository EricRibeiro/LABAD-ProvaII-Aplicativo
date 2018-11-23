import { HttpClient, HttpHeaders } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { IndividualDTO } from "../../models/individual.dto";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class IndividualService {

    public headers: HttpHeaders;

    constructor(public http: HttpClient) {
    }

    findAll(): Observable<IndividualDTO[]> {
        return this.http.get<IndividualDTO[]>(`${API_CONFIG.baseUrl}/individuals`);
    }

    findById(id: number) {
        return this.http.get<IndividualDTO>(`${API_CONFIG.baseUrl}/individuals/${id}`);
    }
}