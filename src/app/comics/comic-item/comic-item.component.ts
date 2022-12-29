import { Component, Input, OnInit } from '@angular/core';
import { comics } from '../ComicInterface/comics-interface';
@Component({
  selector: 'app-comic-item',
  templateUrl: './comic-item.component.html',
  styleUrls: ['./comic-item.component.css']
})
export class ComicItemComponent implements OnInit {
  @Input() comic!: comics;
  constructor() { }

  ngOnInit(): void {
  }

}
