import { Component, OnInit } from '@angular/core';
import { comics } from '../ComicInterface/comics-interface';
import { ComicServicesService } from '../../servicios/comicServices/comic-services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
  comics: comics[] = [];
  constructor(private comicServicesService: ComicServicesService , private route : ActivatedRoute ) { }

  ngOnInit(): void {
    this.comicServicesService.getAllComics().subscribe({
      next: comics => this.comics = comics,

      error: error => console.error(error),


    });
  }

}
