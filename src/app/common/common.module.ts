import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SliderComponent } from './slider/slider.component';



@NgModule({
  declarations: [
    SliderComponent
  ],
  imports: [
    FormsModule
  ],
  exports: [
    SliderComponent
  ]
})
export class CommonModule { }
