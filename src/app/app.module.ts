import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { clase } from './models/clase';
import { PRUEBA } from './models/prueba';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { TaskComponent } from './task/task.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Output } from '@angular/core';
import { AddtaskComponent } from './addtask/addtask.component';
import { observable, Subscription } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes = [
{ path: '', component: TaskComponent},
{ path: 'about', component: AboutComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TaskComponent,
    TaskItemComponent,
    AddtaskComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing:true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
