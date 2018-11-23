import { HttpClient, HttpHeaders } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { CustomerDTO } from "../../models/customer.dto";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class CustomerService {

    public headers: HttpHeaders;

    constructor(public http: HttpClient) {
    }

    findAll(): Observable<CustomerDTO[]> {
        return this.http.get<CustomerDTO[]>(`${API_CONFIG.baseUrl}/customers`);
    }

    findById(id: number): Observable<CustomerDTO> {
        return this.http.get<CustomerDTO>(`${API_CONFIG.baseUrl}/customers/${id}`);
    }
}