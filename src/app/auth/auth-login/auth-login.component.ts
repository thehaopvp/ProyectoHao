import { Component, OnInit, ViewChild } from '@angular/core';
import { UserLogin } from '../interface/user';
import { ApiService } from '../../servicios/api/api.service';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css'],
})
export class AuthLoginComponent implements OnInit {
  constructor(
    private readonly authsService: ApiService,
    private readonly router: Router
  ) {}
  existe:boolean = false;
  loginUser!: UserLogin;

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(): void {
    this.loginUser = {
      nombre: '',
      password: '',
    };
  }

  logUser(): void {
    this.authsService.login(this.loginUser).subscribe({
      next: () => {
        this.router.navigate(['/comics']);
      },
      error: (error) => {
        console.error(error)
      }
    });
    this.existe =true
  }

  validClasses(ngModel: NgModel, validClass: string, errorClass: string) {
    return {
      [validClass]: ngModel.touched && ngModel.valid,
      [errorClass]: ngModel.touched && ngModel.invalid,
    };
  }
}
