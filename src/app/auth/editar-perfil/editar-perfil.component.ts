import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { regiUser, User } from '../interface/user';
import { ApiService } from '../../servicios/api/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm, NgModel } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Binary } from '@angular/compiler';
@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css'],
})
export class EditarPerfilComponent implements OnInit {
  @ViewChild('RegiForm') RegiForm!: NgForm;
  @Input() user!: User;

  public previsualizacion: string = '';
  constructor(
    private readonly authsService: ApiService,
    private readonly router: Router,
    private sanitizer: DomSanitizer,
    private readonly route: ActivatedRoute
  ) {}
  regiUser!: regiUser;
  password2: string = '';

  url = '../../../assets/perfil/Logo.png';

  ngOnInit(): void {

    this.user = this.route.snapshot.data['profile'];
    this.resetForm();
    this.user.imagen = 'data:image/png;base64, ' + this.user.imagen;
  }

  resetForm(): void {
    this.regiUser = {
      nombre: this.user.nombre,
      password: '',
      imagen: '',
      role:""
    };
  }

  capturarFile(event: any): any {
    const archivoCapturado = event.target.files[0];
    this.extraerBase64(archivoCapturado).then((imagenes: any) => {
      this.previsualizacion = imagenes.base;
      this.regiUser.imagen = imagenes.base;
    });
  }

  changUser(): void {
    this.authsService.changeUser(this.regiUser).subscribe({
      next: () => {
        this.authsService.logout();
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
