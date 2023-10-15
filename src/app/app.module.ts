import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ToDoListPageComponent } from './features/to-do-list/to-do-list-page/to-do-list-page.component';
import { ToDoListComponent} from './features/to-do-list/to-do-list-list/to-do-list.component';
import { ToDoListNewItemComponent} from './features/to-do-list/to-do-list-new-item/to-do-list-new-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToDoListItemComponent } from './features/to-do-list/to-do-list-item/to-do-item.component';
import { ToDoListCanvasComponent } from './features/to-do-list-canvas/to-do-list-canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListPageComponent,
    ToDoListComponent,
    ToDoListNewItemComponent,
    ToDoListItemComponent,
    ToDoListCanvasComponent
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
