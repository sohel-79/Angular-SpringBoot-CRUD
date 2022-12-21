import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {

  users:any;
  resp :any;

  constructor(private service : UserServiceService, private http: HttpClient , private route : Router) { }

  ngOnInit(): void {
  this.allUsers();
  }

  allUsers(){
   this.resp = this.service.getAllUsers().subscribe((data)=>{
    this.users=data;
    console.log(this.users);
   });
  }

  update(id:any){
    this.route.navigate(['update',id]);
  }

  delete(id:any){
    this.resp= this.service.deleteUser(id).subscribe((data)=>{
      this.users=data;
    });
    console.log(id);
    alert('User deleted');
  }
}
