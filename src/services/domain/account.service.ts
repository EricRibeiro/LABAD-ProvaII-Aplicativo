import { HttpClient, HttpHeaders } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { AccountDTO } from "../../models/account.dto";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class AccountService {

    public headers: HttpHeaders;

    constructor(public http: HttpClient) {
    }

    findAll(): Observable<AccountDTO[]> {
        return this.http.get<AccountDTO[]>(`${API_CONFIG.baseUrl}/accounts`);
    }

    findById(id: number): Observable<AccountDTO> {
        return this.http.get<AccountDTO>(`${API_CONFIG.baseUrl}/accounts/${id}`);
    }

    findByCustomer(custId: number): Observable<AccountDTO[]> {
        return this.http.get<AccountDTO[]>(`${API_CONFIG.baseUrl}/accounts?filter[where][cust_id]=${custId}`);
    }
}