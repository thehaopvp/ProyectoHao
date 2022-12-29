import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { comics } from '../ComicInterface/comics-interface';
@Component({
  selector: 'app-comic-details',
  templateUrl: './comic-details.component.html',
  styleUrls: ['./comic-details.component.css']
})
export class ComicDetailsComponent implements OnInit {

  @Input()  comic!: comics;

  constructor(private readonly router: Router,  private readonly route: ActivatedRoute) { }
  ngOnInit(): void {
    this.comic =  this.route.snapshot.data['comic'];
    this.comic.portada = "data:image/png;base64,\ " + this.comic.portada;

  }

   goBack():void {
    this.router.navigate(['/comics']);
  }
}
