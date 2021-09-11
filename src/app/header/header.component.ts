import { Component, OnInit } from '@angular/core';
import { ItemService } from '../servicios/item.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string ='Test List';
 showAddTask: boolean = false;
 subscription!: Subscription;


  constructor(private itemservice: ItemService, private router: Router) {
   this.subscription = this.itemservice.onToggle().subscribe((value) =>(this.showAddTask = value));
   }


  ngOnInit(): void {}

toggleAddTask() {
this.itemservice.toggleAddTask();
}
hasRoute( route: string){
  return this.router.url === route;
}
  
}
