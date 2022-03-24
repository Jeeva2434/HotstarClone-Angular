import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RollservicesService } from '../rollservices.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  signupForm: any;
  user:boolean = this.rs.user;
  userName:string=this.rs.userName;
  constructor(private rs:RollservicesService) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData' : new FormGroup({
        'name': new FormControl(null,[Validators.required,Validators.minLength(6), Validators.pattern("[a-zA-Z ]+")]),
        'email': new FormControl(null,[Validators.required, Validators.email]),
        'phonenumber': new FormControl(null,[Validators.required, Validators.pattern("[0-9]{10}")]),
        'password': new FormControl(null,[Validators.required, Validators.pattern("[a-z,A-Z,0-9,@$#&*]{8,15}")])
      })
    })
  }

  onSubmit(){
    console.log(this.signupForm)
  }
  onClick(value:string){
    this.rs.userName=value;
    console.log(this.rs.userName);
    this.rs.user = true;
  }
}