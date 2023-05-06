import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tamin-icon',
  templateUrl: './tamin-icon.html',
  styleUrls: ['./tamin-icon.scss'],
})
export class TaminIcon implements OnInit {
  @Input() name: string | undefined;
  @Input() size: string = "small" ;//'small' | 'medium' | 'large'
  @Input() fill: string = "nofill";  //"nofill", "fill"
  @Input() color: string = 'primary'; // "primary", "secondary", "tertiary", "success", "warning", "danger", "light"


  constructor() {
  }

  ngOnInit() {

  }

  getfill() {
    switch (this.fill) {
      case "fill":
        return 'fill';
      case "nofill":
        return 'no-fill';
      default:
        return 'no-fill';
    }
  }
  getsize() {
    switch (this.size){
      case "small": return 'small';
      case "medium": return 'medium';
      case "large": return 'large';
      default: return 'small';
    }

  }

  getcolor() {
    switch (this.color){
      case "primary": return 'primary';
      case "secondary": return 'secondary';
      case "tertiary": return 'tertiary';
      case "success": return 'success';
      case "warning": return 'warning';
      case "danger": return 'danger';
      case "light": return 'light';
      default: return 'primary';
    }
  }
}
