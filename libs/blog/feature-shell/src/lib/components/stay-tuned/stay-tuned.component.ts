import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'blog-stay-tuned',
  templateUrl: './stay-tuned.component.html',
  styleUrls: ['./stay-tuned.component.scss']
})
export class StayTunedComponent implements OnInit {
  @Output() public open = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

}
