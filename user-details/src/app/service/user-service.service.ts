import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../User';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  users :any;

  constructor(private http:HttpClient) { }

  getAllUsers(){
    return this.http.get('http://localhost:8080/getallusers');
  }

  deleteUser(id:any){
    return this.http.delete('http://localhost:8080/delete/'+id);
  }

  saveUser(user:any){
    return this.http.post('http://localhost:8080/register',user,{responseType:'text' as 'json'});
  }

  updateUser(user:any,id:any){
    return this.http.put('http://localhost:8080/update/'+id,user);
  }

  findUser(id:any){
    return this.http.get('http://localhost:8080/user/'+id);
  }
}
