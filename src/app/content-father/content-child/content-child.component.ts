import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.css']
})
export class ContentChildComponent {
  @Input() todo: string;
  @Input() index: number;
  @Output() delete: EventEmitter<number> = new EventEmitter();

  delData() {
    this.delete.emit(this.index);
  }
}
