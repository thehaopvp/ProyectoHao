import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { comics } from '../ComicInterface/comics-interface';
import { capitulos } from '../capitulosInterface/capitulos';
import { NgForm, NgModel } from '@angular/forms';
import { CapitulosService } from '../../servicios/capitulos/capitulos.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from '../../servicios/api/api.service';

@Component({
  selector: 'app-comic-details',
  templateUrl: './comic-details.component.html',
  styleUrls: ['./comic-details.component.css'],
})
export class ComicDetailsComponent implements OnInit {
  @ViewChild('CapituloForm') CapituloForm!: NgForm;

  comic!: comics;
  capitulos: capitulos[] = [];
  capitulo!: capitulos;

  admin!: boolean;
  constructor(
    private readonly capitulosService: CapitulosService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private readonly apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.apiService.admin$.subscribe((e) => (this.admin = e));
    this.comic = this.route.snapshot.data['comic'];
    this.comic.portada = 'data:image/png;base64, ' + this.comic.portada;
    this.resetForm();

    this.capitulosService.getAllCapitulos(this.comic.id!).subscribe({
      next: (capitulos) => (this.capitulos = capitulos),

      error: (error) => console.error(error),
    });
  }

  resetForm(): void {
    this.capitulo = {
      titulo: '',
      imagenes: '',
      id_comic: this.comic.id,
    };
  }

  subirCapitulos(): void {
    this.capitulosService.subirCapitulos(this.capitulo).subscribe({
      next: () => {
        this.router.navigate(['/comics']);
        console.log(this.comic.id);
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

  capturarFile(event: any): any {
    const archivoCapturado = event.target.files[0];
    this.extraerBase64(archivoCapturado).then((imagenes: any) => {
      console.log(imagenes.base);
      this.capitulo.imagenes = imagenes.base;
    });
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
      return null;
    });
}
