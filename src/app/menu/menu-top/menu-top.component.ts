import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';

import { UserLogin } from '../../auth/interface/user';
import { ApiService } from '../../servicios/api/api.service';

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.css']
})
export class MenuTopComponent implements OnInit {
  @Input() user!: UserLogin;
  logged!: boolean;
  admin!: boolean;


  ngOnInit(): void {
    this.apiService.loginChange$.subscribe(e=> (this.logged = e));
    this.apiService.admin$.subscribe(e=> (this.admin = e));
  }
  constructor( private readonly apiService:  ApiService  , private readonly router: Router)  { }

  logout():void{
    this.apiService.logout();
    this.router.navigate(['/auth']);
  }

}
