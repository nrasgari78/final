import {Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[segmentValue]'
})
export class SegmentValueDirective implements OnChanges{
  @Input() segmentValue!: boolean;
  constructor(private template: TemplateRef<any>, private view : ViewContainerRef) {

  }


  ngOnChanges(changes: SimpleChanges): void {
    this.segmentValue ? this.view.createEmbeddedView(this.template) : this.view.clear()
  }
}
