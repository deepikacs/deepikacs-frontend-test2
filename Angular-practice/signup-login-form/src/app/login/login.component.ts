import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
// import { NgModule } from '@angular/core';
import { SimpleServiceService } from '../simple-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	values: any = [];
	email:String;
  	password:String;
  constructor() { }

  ngOnInit() {
  }
   onSubmit(form) { 
  if(form.valid) {
    // this.valuesLogIn.push({emailLogIn: this.emailLogIn,passwordLogIn: this.passwordLogIn});
    // form.reset()
    this.values.forEach(value => {
      if ((value.signupemail == this.email) && (value.signuppassword == this.password)){
        // if((value.password == this.passwordLogIn)){
          // this.router.navigate['/']
        console.log('success')
       }
        else {
          console.log('error')
        }
        // console.log('error')
      // }
    // })
  })
  }
}


}
