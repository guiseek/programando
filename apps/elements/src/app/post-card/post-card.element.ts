import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'web-post-card',
  templateUrl: './post-card.element.html',
  styleUrls: ['./post-card.element.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class PostCardElement implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
