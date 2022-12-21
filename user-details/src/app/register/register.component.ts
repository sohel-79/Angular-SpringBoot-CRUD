import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';
import { User } from '../User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User();
  message="Registration Successfull";
 
  @ViewChild('myForm', {static: true}) myForm: any;

  constructor(private service: UserServiceService,private router : Router) { }

  ngOnInit(): void {
    console.log(this.myForm);
  }

  
  
  submit(){
    let resp = this.service.saveUser(this.user);
    alert(this.message);
    console.log(this.message);
    this.router.navigate(['allusers']);
    
  }

}
