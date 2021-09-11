import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { clase } from '../models/clase';
import { ItemService } from '../servicios/item.service';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
@Output() onAddTask: EventEmitter<clase> = new EventEmitter;
text!: string;
day!: string;
reminder: boolean = false;
showAddTask!: boolean;
subscription: Subscription;

constructor(private itemservice: ItemService) { 

  this.subscription = this.itemservice.onToggle().subscribe((value) =>(this.showAddTask = value));

  }

  ngOnInit(): void {
  }
  onSubmit(){
    if(!this.text){
    alert('Please add a task!');
    return
    }
    const newTask ={
      text:this.text,
      day: this.day,
      reminder: this.reminder
    };

    this.onAddTask.emit(newTask)
    this.text = '';
    this.day = '';
    this.reminder = false;
  }

}
