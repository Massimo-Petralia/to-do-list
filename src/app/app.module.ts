import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PageComponent } from './features/page/page.component';
import { ListComponent } from './features/list/list.component';
import { ItemComponent } from './features/newItem/newItem.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToDoItemComponent } from './features/to-do-item/to-do-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    ListComponent,
    ItemComponent,
    ToDoItemComponent
    
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
