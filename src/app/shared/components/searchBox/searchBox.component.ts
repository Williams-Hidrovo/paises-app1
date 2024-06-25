import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-searchBox',
  templateUrl: './searchBox.component.html',
  styleUrls: ['./searchBox.component.css'],
})
export class SearchBoxComponent {
  @Input()
  public placeholder: string = '';

  @Output()
  public myEvent = new EventEmitter<string>();

  public emitValue(value: string) {
    this.myEvent.emit(value);
  }
}
