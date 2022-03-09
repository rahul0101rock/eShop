import { LoadingComponent } from './loading.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [LoadingComponent],
  imports: [
    CommonModule
  ], exports: [LoadingComponent]
})
export class LoadingModule { }
