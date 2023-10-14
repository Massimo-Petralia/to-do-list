import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListComponent } from './features/list/list.component';
import { ItemComponent } from './features/newItem/newItem.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToDoItemComponent } from './features/to-do-item/to-do-item.component';
import { CanvasComponent } from './features/canvas/canvas.component';
import { PageComponent } from './features/to-do-list/page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    ListComponent,
    ItemComponent,
    ToDoItemComponent,
    CanvasComponent
    
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
