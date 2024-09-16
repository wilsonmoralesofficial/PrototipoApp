import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http : HttpClient) { }


  execute(api: string, ...restparams: string[]): Promise<Object[]> {

    const headers = new HttpHeaders({ 'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + environment.API_KEY_FRONT_END
     });
		return this.http.post(api, JSON.stringify({params : restparams}), {headers})
    .toPromise()
    .then(response => response as Object[])
    .catch(error => this.handleError(error));
	}

  private handleError(error: any): Promise<Object[]> {
    console.error('An error occurred', error);
    // Devolver un array vacío en caso de error
    return Promise.resolve([]);
  }
}
