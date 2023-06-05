import { Component } from '@angular/core';

@Component({
  selector: 'app-content-father',
  templateUrl: './content-father.component.html',
  styleUrls: ['./content-father.component.css']
})
export class ContentFatherComponent {
  todoList: string[] = [];
  data: string = '';

  checkData(): boolean {
    return this.data.length > 0;
  }

  addData(btn: HTMLButtonElement): void {
    if (this.data) {
      this.todoList.unshift(this.data);
      this.data = '';
    } else {
      if (!btn.disabled) {
        btn.setAttribute('disabled', '');
        throw new Error('Data is empty!!');
      }
    }
  }

  delData(index: number) {
    this.todoList.splice(index, 1);
  }
}
