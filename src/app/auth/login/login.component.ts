import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading = false;
  error = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(form: NgForm) {
    this.isLoading = true;
    this.authService.login(form.value['email'], form.value['password']).then(
      response => {
        this.isLoading = false;
        this.router.navigate(['/products']);
      }, error => {
        this.isLoading = false;
        this.error = error;
      }
    );

  }
}
