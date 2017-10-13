import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoComponent }   from './todo.component';
import { routing } from './todo.routing';

@NgModule({
  imports: [routing, CommonModule, FormsModule],
  declarations: [TodoComponent]
})
export class TodoModule {}