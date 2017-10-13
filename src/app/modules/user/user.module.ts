import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent }   from './user.component';
import { routing } from './user.routing';

@NgModule({
  imports: [routing, CommonModule],
  declarations: [UserComponent]
})
export class UserModule {}