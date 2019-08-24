import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HTTPService {
    constructor(private http: HttpClient) { }


    sendEmail(subject: string, content: string ) {
        return this.http.post('https://us-central1-the-store-436b8.cloudfunctions.net/httpEmail',
        {
            subject,
            content
        });
    }
}

