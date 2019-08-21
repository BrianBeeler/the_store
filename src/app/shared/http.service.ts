import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HTTPService {
    constructor(private http: HttpClient) { }


    sendEmail(from: string, to: string, subject: string, content: string ) {
        return this.http.post('https://us-central1-the-store-436b8.cloudfunctions.net/httpEmail',
        {
            from,
            to,
            subject,
            content
        }).subscribe(responseData => {
            console.log(responseData);
        }, error => {
            console.error(error);
        });
    }
}

