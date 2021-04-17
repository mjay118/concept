import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {
 
form= new FormGroup({
  email: new FormControl('', Validators.required),
  password: new FormControl('', Validators.required)
})
  get email(){
    return this.form.get('email');
  }
//   get f()
// {
//     return this.form.controls;
// }
 

}
