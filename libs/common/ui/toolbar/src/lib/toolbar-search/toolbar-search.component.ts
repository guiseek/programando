import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'ui-toolbar-search',
  templateUrl: './toolbar-search.component.html',
  styleUrls: ['./toolbar-search.component.scss']
})
export class ToolbarSearchComponent implements OnInit {
  isOpen: boolean;
  @ViewChild('input', { read: ElementRef, static: true }) input: ElementRef;
  @Input() parentControl: FormControl;
  @Output() up = new EventEmitter();
  constructor(private fb: FormBuilder) {
    if (!this.parentControl) {
      this.parentControl = this.fb.control('');
    }
  }

  ngOnInit() {}
  open() {
    this.isOpen = true;

    setTimeout(() => {
      this.input.nativeElement.focus();
    }, 100);
  }

  close() {
    this.isOpen = false;
  }
}
