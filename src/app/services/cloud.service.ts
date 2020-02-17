import { Injectable } from '@angular/core';
import { of, Observable } from "rxjs";
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';
import { map, tap, catchError } from  'rxjs/operators';
import { FILES } from '../data/mock';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CloudService {
  SERVER_URL: string = environment.apiBaseUrl + "/stories";
  
  constructor(private httpClient: HttpClient) { }

  getFiles() {
    return of(FILES);
  }

  public upload(data: any): Observable<any> {

    let uploadURL = `${this.SERVER_URL}/upload`;

    return this.httpClient.post<any>(
        uploadURL, data, 
        {
          reportProgress: true,
          observe: 'events'
        }
      ).pipe(
          tap( event => {
            switch (event.type) {
              case HttpEventType.UploadProgress:
                console.info(`Cloud service response: ${event.type} UploadProgress - loaded:${event.loaded}, total:${event.total}`);
                break;
              case HttpEventType.Response:
                console.info(`Cloud service response: ${event.type} Response - body:${event.body}`);
                break;
              case HttpEventType.DownloadProgress:
                console.info(`Cloud service response: ${event.type} DownloadProgres`);
                break;
              case HttpEventType.ResponseHeader:
                console.info(`Cloud service response: ${event.type} ResponseHeader`);
                break;
              case HttpEventType.Sent:
                console.info(`Cloud service response: ${event.type} Sent`);                  
                break;
              case HttpEventType.User:
                console.info(`Cloud service response: ${event.type} User`);                  
                break;
              default:
                console.info(`Cloud service response: Unhandled event: ${event}`);
            }
            
          }),
          map((event) => {
            switch (event.type) {
              case HttpEventType.UploadProgress:
                const progress = Math.round(100 * event.loaded / event.total);
                return { status: 'progress', message: progress };
              case HttpEventType.Response:
                return { status: event.body.status, message: event.body.message };
              default:
                return { status: 'other', message: `Unhandled event: ${event.type}`};
            }
          }),
          catchError((event) => this.handleError<any>('uploadFile',{ status: 'error', message: 'Error uploading file' }))
        );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
