import {Component, Input} from '@angular/core';

@Component({
  selector: 'tamin-progress-bar',
  templateUrl: './tamin-progress-bar.component.html',
  styleUrls: ['./tamin-progress-bar.component.scss']
})
export class TaminProgressBarComponent {
  @Input() value!: number;
  @Input() color: string | undefined; // "primary", "secondary", "tertiary", "success", "warning", "danger", "light", "medium", "dark"



  constructor() {
  }
}
