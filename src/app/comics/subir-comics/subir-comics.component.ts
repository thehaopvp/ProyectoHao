import { Component, OnInit, ViewChild } from '@angular/core';
import { ComicServicesService } from 'src/app/servicios/comicServices/comic-services.service';
import { Router } from '@angular/router';
import { NgForm, NgModel } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Binary } from '@angular/compiler';
import { regiUser } from 'src/app/auth/interface/user';
import { comics } from '../ComicInterface/comics-interface';

@Component({
  selector: 'app-subir-comics',
  templateUrl: './subir-comics.component.html',
  styleUrls: ['./subir-comics.component.css'],
})
export class SubirComicsComponent implements OnInit {
  @ViewChild('ComicForm') ComicForm!: NgForm;

  public previsualizacion: string = '';
  constructor(
    private readonly comicServices: ComicServicesService,
    private readonly router: Router,
    private sanitizer: DomSanitizer
  ) {}
  comics!: comics;
  password2: string = '';

  url = '../../../assets/perfil/Logo.png';

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(): void {
    this.comics = {
    titulo: "",
    portada: "",
    descripcion: "",
    capitulos:"",
    }
  }

  capturarFile(event: any): any {
    const archivoCapturado = event.target.files[0];
    this.extraerBase64(archivoCapturado).then((imagenes: any) => {
      this.previsualizacion = imagenes.base;
      this.comics.portada = imagenes.base;
    });
  }

  subirComic(): void {
    this.comicServices.subirComics(this.comics).subscribe({
      next: () => {
        this.router.navigate(['/comics']);
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
