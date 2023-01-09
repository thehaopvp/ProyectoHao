import { Component, Input, OnInit } from '@angular/core';
import { capitulos } from '../capitulosInterface/capitulos';

@Component({
  selector: 'app-capitulo-item',
  templateUrl: './capitulo-item.component.html',
  styleUrls: ['./capitulo-item.component.css']
})
export class CapituloItemComponent implements OnInit {
  @Input() capitulo!: capitulos;
  constructor() { }

  ngOnInit(): void {
  }

}
