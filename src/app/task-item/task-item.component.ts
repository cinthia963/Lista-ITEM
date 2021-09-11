import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { clase } from '../models/clase';
import { faTimes } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
@Input () clase!: clase;
@Output() onDeleteclase: EventEmitter <clase>= new EventEmitter();
@Output() onToggleReminder: EventEmitter <clase>= new EventEmitter();

faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {}

onDelete(clase: any){
  this.onDeleteclase.emit(clase);
}

onToggle(clase:any){
  this.onToggleReminder.emit(clase);
}

}
