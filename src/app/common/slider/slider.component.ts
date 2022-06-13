import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  rangeValue: Number = 0;
  @Input()
  label!: String;
  @Input()
  min!: Number;
  @Input()
  max!: Number;
  @Input()
  minLabel!: String;
  @Input()
  maxLabel!: String;
  @Input()
  for!: String;
  @Input()
  default!: Number;
  constructor() { 
  }
  @Output() onRangeValueSelect = new EventEmitter();

  ngOnInit(): void {
    this.rangeValue = this.default;
  }
  
  triggerInputChange(){
    this.onRangeValueSelect.emit({value:this.rangeValue});
  }
}
