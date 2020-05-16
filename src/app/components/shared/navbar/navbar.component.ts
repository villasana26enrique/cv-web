import { Component, OnInit } from '@angular/core';
import { MenuInfoService } from '../../../services/menu-info.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  options: any;
  constructor(service: MenuInfoService) { 
    this.options = service.getOptions('en');
  }

  ngOnInit(): void {
  }
}
