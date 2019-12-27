import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html'
})
export class ConfirmationDialogComponent implements OnInit {
  @Output() deleteFunc: EventEmitter<string> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  deletePage(){
    this.deleteFunc.emit();
  }

}
