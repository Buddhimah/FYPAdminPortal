import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TableComponent } from './table/table.component';
import { AlertModule } from 'ngx-bootstrap';
import { UsertableComponent } from './components/usertable/usertable.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { AboutComponent } from './about/about.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TableComponent,
    UsertableComponent,
    AboutComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    HttpClientModule,
    MatTableModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
