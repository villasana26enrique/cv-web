import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuInfoService {

  private menuOptions: Menu[] = [
    {
      lang: 'en',
      options: [
        {
          name: 'Home',
          url: 'home',
          father: false
        },
        {
          name: 'Languages',
          url: 'languages',
          father: false
        },
        {
          name: 'Skills',
          url: 'skills',
          father: false
        },
        {
          name: 'Dev Tools',
          url: 'tools',
          father: false
        },
        {
          name: 'Work Experience',
          url: 'work-experience',
          father: false
        },
        {
          name: 'Extra Studies',
          url: 'extra-studies',
          father: false
        },
        {
          name: 'References',
          url: 'references',
          father: false
        },
      ]
    },
    {
      lang: 'es',
      options: [
        {
          name: 'Inicio',
          url: 'home',
          father: false
        },
        {
          name: 'Idiomas',
          url: 'languages',
          father: false
        },
        {
          name: 'Habilidades',
          url: 'skills',
          father: false
        },
        {
          name: 'Herramientas de Desarrollo',
          url: 'tools',
          father: false
        },
        {
          name: 'Experiencia Laboral',
          url: 'work-experience',
          father: false
        },
        {
          name: 'Estudios Extras',
          url: 'extra-studies',
          father: false
        },
        {
          name: 'Referencias',
          url: 'references',
          father: false
        },
      ]
    },
  ];

  constructor() {
    console.log( 'Servicio Listo' );
  }

  getOptions( lang: string ) {
    for ( let menu of this.menuOptions ) {
      if (menu.lang === lang) {
        return menu.options;
      }
    }
  }
}

export interface Menu {
  lang: string;
  options: MenuOption[];
}

export interface MenuOption {
  name: string;
  url: string;
  father: boolean;
  children?: MenuOption[];
}
