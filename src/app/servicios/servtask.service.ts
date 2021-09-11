import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { clase } from '../models/clase';
 
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ServtaskService {
  private apiUrl ='  http://localhost:5500/prueba'

  constructor( private http:HttpClient) { }

  getPrueba(): Observable<clase[]> {
    return this.http.get<clase[]>(this.apiUrl);
  }
 deleteclase(task: clase): Observable<clase>{
   const url=`${this.apiUrl}/${task.id}`;
   return this.http.delete<clase>(url);
 }
updateTaskReminder(task: clase){
const url=`${this.apiUrl}/${task.id}`;
return this.http.put<clase>(url, task, httpOptions);
}
addTask(task: clase): Observable<clase>{
return this.http.post<clase>(this.apiUrl, task, httpOptions);
}

}


