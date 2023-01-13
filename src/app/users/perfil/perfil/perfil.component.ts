import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../auth/interface/user';
import { ApiService } from '../../../servicios/api/api.service';
import { UserServiceService } from '../../user-service/user-service.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  @Input()  user!: User;
  usuario!: any;
  admin!: boolean;

  constructor( private readonly router: Router,  private readonly route: ActivatedRoute  ,private readonly apiService: ApiService) { }

  ngOnInit(): void {

    this.usuario = localStorage.getItem("user");
    this.apiService.admin$.subscribe(e=> (this.admin = e));
    this.user =  this.route.snapshot.data['profile'];

    this.user.imagen = "data:image/png;base64,\ " + this.user.imagen;
    console.log(this.user);

  }

   goBack():void {
    this.router.navigate(['/comics']);
  }
}
