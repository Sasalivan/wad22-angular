import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToFahrenheidPipe } from './to-fahrenheid.pipe';
import { FourofourComponent } from './fourofour/fourofour.component';



@NgModule({
  declarations: [
    FourofourComponent,
    ToFahrenheidPipe,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
