import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../auth/interface/user';
import { UserServiceService } from '../../user-service/user-service.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  @Input()  user!: User;


  constructor( private readonly router: Router,  private readonly route: ActivatedRoute  ) { }

  ngOnInit(): void {
    this.user =  this.route.snapshot.data['profile']
    this.user.imagen = "data:image/png;base64,\ " + this.user.imagen;

  }
   goBack():void {
    this.router.navigate(['/comics']);
  }
}
export class AppComponent {
  isCollapsed = false;
}
