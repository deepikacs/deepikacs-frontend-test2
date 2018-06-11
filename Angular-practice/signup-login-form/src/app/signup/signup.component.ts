import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SimpleServiceService } from '../simple-service.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

fname:String;
lname:String;
signupemail :String;
signuppassword: String;
values: any = [];
  constructor(private router: Router,private SimpleServiceService : SimpleServiceService ) { }

  ngOnInit() {
  }
  onSubmit(form) { 
  if(form.valid) {
  	this.values.push({Firstname: this.fname,lastname: this.lname, email: this.signupemail,password: this.signuppassword});
  
  }
}

mySave(){
	this.SimpleServiceService.savedata(this.values);

}

}
