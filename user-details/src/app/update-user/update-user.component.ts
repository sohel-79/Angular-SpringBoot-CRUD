import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';
import { User } from '../User';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user:any;
  id:any;
  @ViewChild('myForm', {static: true}) myForm: any;
  
  

  constructor(private service: UserServiceService, private route:ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.getUser(this.id);
  }

  getUser(userid:any){
    let resp = this.service.findUser(userid);
    resp.subscribe((data)=>{
      this.user=data;
      console.log(this.user);
    })
  }


  submit(){
    let resp = this.service.updateUser(this.user,this.id);
    resp.subscribe((data)=>{
      this.user=data;
      alert('Details Updated ');
      this.router.navigate(['allusers']);
    })
  }
}
