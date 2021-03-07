import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private authService: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
    if(this.authService.isAuthenticated()){
      this.router.navigate(['/collection'])
    }

    this.initForm();
  }

  initForm(){
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  login(form){
    if(this.form.valid){
      this.authService.login(this.form.value).subscribe(
        data => {
          //Set the JWTToken
          if (this.authService.validate(data)) {
            this.router.navigate(['/collection'])
          }
        },
        //Alert the username or password is wrong
        error => alert(error.error));
    }
  }
}
