import {
  AfterViewInit,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {IonAccordion} from "@ionic/angular";

@Component({
  selector: 'tamin-steper',
  templateUrl: './tamin-steper.html',
  styleUrls: ['./tamin-steper.scss'],
})
export class TaminSteper implements OnInit {
  @ViewChild('accordion', { static: true }) accordion!: IonAccordion;

  @Input() color: string | undefined;
  @Input() value: string | undefined;
  @Input() disabled: boolean = false;
  @Input() header: string | undefined;
  @Input() order: string | undefined;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.accordion)
  }

}

@Component({
  selector: 'tamin-steper-group',
  template: `
    <ion-accordion-group  (ionChange)="steperChange($event)">
      <ng-content></ng-content>
    </ion-accordion-group>
  `
})
export class TaminSteperGroup implements OnInit {
  @Output() changeSteper = new EventEmitter<any>();
  @ContentChild(TemplateRef) templateRef!: TemplateRef<any>;
  currentValue : any;


  constructor() {
  }

  ngOnInit() {
  }

  steperChange(value: any){
    this.changeSteper.emit(value['detail']['value'])
    this.currentValue = value;
  }
}
