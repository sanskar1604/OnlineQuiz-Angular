import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {
    
    catId:any;
    constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.catId = this._route.snapshot.params['catId'];
    console.log(this.catId);
  }

}
