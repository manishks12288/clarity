import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { UserListService } from './services/user-list.service';
import { SharedService } from './services/shared.service';
import { TodoService } from './services/todo.service';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
// import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    routing
  ],
  providers: [UserListService, SharedService, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
