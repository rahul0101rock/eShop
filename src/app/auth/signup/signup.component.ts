import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm!: FormGroup;
  isLoading = false;
  error = null;

  constructor(public formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]]
    }, {
      validator: this.matchpass("password", "confirmPassword")
    }
    );
  }

  onSignUp() {
    let email: string = this.signUpForm.value.email;
    let password: string = this.signUpForm.value.password;
    let firstName: string = this.signUpForm.value.firstName;
    let lastName: string = this.signUpForm.value.lastName;

    this.isLoading = true;

    this.authService.signup(email, password, firstName, lastName).then(
      response => {
        this.isLoading = false;
        this.router.navigate(['/products']);
      }, error => {
        this.isLoading = false;
        this.error = error.message;
      }
    );
  }

  matchpass(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup) => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];
      if (password.value == confirmPassword.value) {
        return;
      } else {
        confirmPassword.setErrors({
          notEqualToPassword: true
        })
      }

    }
  }

}
