import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../../services/heroes.service';

@Component({
  selector: 'app-search-nav-bar',
  templateUrl: './search-nav-bar.component.html',
  styleUrls: ['./search-nav-bar.component.css']
})
export class SearchNavBarComponent implements OnInit {

  heroes:any;
  termino:string;

  constructor( private _heroesService:HeroesService,
               private activatedRoute:ActivatedRoute,
               private router:Router) {
    this.activatedRoute.params.subscribe( params => {
      this.heroes = this._heroesService.buscarHeroes( params['termino'] );
      this.termino = params['termino'];
   })
  }

  verHeroe( i:number ) {
    const idx = this._heroesService.indexHeroe(this.heroes[i].nombre);
    this.router.navigate( ['/heroe', idx] );
  }

  ngOnInit() {
  }

}
