
import { Component, OnInit } from '@angular/core';
import { ServtaskService } from '../servicios/servtask.service';
import { clase } from '../models/clase';
import { PRUEBA } from '../models/prueba';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  task: clase[] = [];

 



  constructor(private servtask: ServtaskService) { }

  ngOnInit(): void {
    this.servtask.getPrueba().subscribe((PRUEBA) =>(this.task = PRUEBA));
  }
deleteclase(task: clase){
  this.servtask.deleteclase(task).subscribe((PRUEBA) =>(this.task.filter(t => t.id !== task.id)));
}
toggleReminder(task: clase){
  task.reminder =!task.reminder;
  this.servtask.updateTaskReminder(task).subscribe();

}
addTask(task: clase){
  this.servtask.addTask(task).subscribe((task) =>(this.task.push(task)));

}
}

