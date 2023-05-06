import {Component, Input} from '@angular/core';


@Component({
  selector: 'tamin-layout',
  templateUrl: './tamin-layout.html',
  styleUrls: ['./tamin-layout.scss'],
})
export class TaminLayout {
}


@Component({
  selector: 'tamin-row',
  template: `
    <div [class]="'row ' + class">
      <ng-content></ng-content>
    </div>
  `,
})
export class TaminRow {
  @Input() class!: string | undefined;

}




@Component({
  selector: 'tamin-col',
  template: `
      <ng-container [class]="class">
          <ng-content></ng-content>
      </ng-container>
  `,

})
export class TaminCol{
  @Input() class!: string | undefined;

}
