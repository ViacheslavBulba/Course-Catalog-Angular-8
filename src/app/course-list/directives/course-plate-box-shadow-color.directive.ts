import { Directive, Input, ElementRef, OnInit, OnChanges } from '@angular/core';

@Directive({
  selector: '[appCoursePlateBoxShadowColor]'
})
export class CoursePlateBoxShadowColorDirective implements OnInit, OnChanges {

  @Input() date: Date;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.setBoxShadow();
  }

  private setBoxShadow() {
    const today = new Date();
    const freshLimitDate = new Date();
    freshLimitDate.setDate(today.getDate() - 14);
    if ((this.date <= today) && (this.date >= freshLimitDate)) {
      this.el.nativeElement.style.boxShadow = '0 1px 24px 0 rgb(76, 199, 60)';
    }
    if (this.date > today) {
      this.el.nativeElement.style.boxShadow = '0 1px 24px 0 rgb(60, 116, 199)';
    }
    if (this.date < freshLimitDate) {
      this.el.nativeElement.style.boxShadow = '0 1px 24px 0 rgba(18, 21, 35, 0.08)';
    }
  }

}
