import { Component, OnInit , ViewChild,} from '@angular/core';
import { regiUser } from '../interface/user';
import { ApiService } from '../../servicios/api/api.service';
import { Router } from '@angular/router';
import {NgForm, NgModel} from '@angular/forms';



@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.css']
})
export class AuthRegisterComponent implements OnInit {

  @ViewChild('RegiForm') RegiForm!: NgForm;

  constructor(
    private readonly authsService: ApiService,
    private readonly router: Router,

  ) { }
  regiUser!: regiUser;
  password2:string = '';


  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(): void {
    this.regiUser = {
      nombre: '',
      password: '',

    };
  }

  regisUser(): void {

    console.log(this.regiUser);
    this.authsService.register(this.regiUser).subscribe({
      next: () => {
        this.router.navigate(['/auth']);
      },
      error: (error) => console.error(error),
    });

  }

  validClasses(ngModel: NgModel, validClass: string, errorClass: string) {
    return {
      [validClass]: ngModel.touched && ngModel.valid,
      [errorClass]: ngModel.touched && ngModel.invalid,
    };
  }

}
