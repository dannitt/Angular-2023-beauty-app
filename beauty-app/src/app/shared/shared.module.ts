import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppEmailDirective } from './validators/app-email.directive';
import { PassedTimePipe } from './pipes/passed-time.pipe';



@NgModule({
  declarations: [
    AppEmailDirective,
    PassedTimePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [PassedTimePipe]
})
export class SharedModule { }
