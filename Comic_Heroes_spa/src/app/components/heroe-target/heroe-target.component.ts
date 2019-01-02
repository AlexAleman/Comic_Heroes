import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-target',
  templateUrl: './heroe-target.component.html',
  styleUrls: ['./heroe-target.component.css']
})
export class HeroeTargetComponent implements OnInit {

  @Input() heroe:any = {};

  @Input() i:Number

  constructor( private router:Router) { }

  verHeroe( idx:number ) {
    this.router.navigate( ['/heroe', idx] );
  }

  ngOnInit() {
  }

}
