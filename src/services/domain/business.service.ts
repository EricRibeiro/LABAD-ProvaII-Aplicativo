import { HttpClient, HttpHeaders } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { BusinessDTO } from "../../models/business.dto";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class BusinessService {

    public headers: HttpHeaders;

    constructor(public http: HttpClient) {
    }

    findAll(): Observable<BusinessDTO[]> {
        return this.http.get<BusinessDTO[]>(`${API_CONFIG.baseUrl}/businesses`);
    }

    findById(id: number) {
        return this.http.get<BusinessDTO>(`${API_CONFIG.baseUrl}/businesses/${id}`);
    }
}