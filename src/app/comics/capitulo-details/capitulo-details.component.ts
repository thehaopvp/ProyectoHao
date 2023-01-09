import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { CapitulosService } from '../../servicios/capitulos/capitulos.service';

import { capitulos } from '../capitulosInterface/capitulos';

@Component({
  selector: 'app-capitulo-details',
  templateUrl: './capitulo-details.component.html',
  styleUrls: ['./capitulo-details.component.css']
})
export class CapituloDetailsComponent implements OnInit {
  capitulo!: capitulos;
  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private capitulosService: CapitulosService

  ) { }


  ngOnInit(): void {
    this.capitulo = this.route.snapshot.data['capitulo'];
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/comics/cargarPagina', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 }

  siguiente(id:number) {
    this.capitulosService.siguiente(id).subscribe({
      next: (res) => {
        this.redirectTo('/comics/capitulo/'+ res.id );
      },
      error: error => console.error(error),
    });
  }

  anterior(id:number){
    this.capitulosService.anterior(id).subscribe({
      next: (res) => {
        this.redirectTo('/comics/capitulo/'+ res.id );
      },
      error: error => console.error(error),
    });
  }
}
