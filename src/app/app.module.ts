import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SortableModule } from 'ngx-bootstrap/sortable';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SortableModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
