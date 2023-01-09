import { Component, OnInit, ViewChild } from '@angular/core';
import { regiUser } from '../interface/user';
import { ApiService } from '../../servicios/api/api.service';
import { Router } from '@angular/router';
import { NgForm, NgModel } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Binary } from '@angular/compiler';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.css'],
})
export class AuthRegisterComponent implements OnInit {
  @ViewChild('RegiForm') RegiForm!: NgForm;

  public previsualizacion: string = '';
  constructor(
    private readonly authsService: ApiService,
    private readonly router: Router,
    private sanitizer: DomSanitizer
  ) {}
  regiUser!: regiUser;
  password2: string = '';

  url = '../../../assets/perfil/Logo.png';

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(): void {
    this.regiUser = {
      nombre: '',
      password: '',
      imagen: '',
      role: 'USER'
    };
  }

  capturarFile(event: any): any {
    const archivoCapturado = event.target.files[0];
    this.extraerBase64(archivoCapturado).then((imagenes: any) => {
      this.previsualizacion = imagenes.base;
      this.regiUser.imagen = imagenes.base;
      console.log(this.regiUser.imagen);
    });
  }

  regisUser(): void {
 //   this.regiUser.imagen = "hola.jpg";
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

  extraerBase64 = async ($event: any) =>
    new Promise((resolve, reject) => {
      try {
        const unsafeImg = window.URL.createObjectURL($event);
        const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
        const reader = new FileReader();
        reader.readAsDataURL($event);
        reader.onload = () => {
          resolve({
            base: reader.result,
          });
        };
        reader.onerror = (error) => {
          resolve({
            base: null,
          });
        };
      } catch (e) {
        return null;
      }
      return 'pepe';
    });
}
