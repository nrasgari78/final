import { Component, EventEmitter, Input, OnChanges, Output, SimpleChange } from '@angular/core';

@Component({
  selector: 'tamin-password-checker',
  templateUrl: './password-checker.page.html',
  styleUrls: ['./password-checker.page.scss'],
})
export class TaminPasswordCheckerPage implements OnChanges {
  bar0!: string;
  bar1!: string;
  bar2!: string;
  bar3!: string;

  @Input() public passwordToCheck!: string;
  @Output() passwordChecker = new EventEmitter<boolean>();

  private colors = ['darkred', 'orangered', 'orange', 'yellowgreen'];
  message!: string;
  messageColor!: string;

  ngOnChanges(changes: { [propName: string]: SimpleChange }): void {
    const password = changes['passwordToCheck'].currentValue;


    this.setBarColors(4, '#DDD');

    if (password) {
      const pwdStrength = this.checkStrength(password);
      pwdStrength === 30 ? this.passwordChecker.emit(true) : this.passwordChecker.emit(false);

      const color = this.getColor(pwdStrength);

      this.setBarColors(color.index, color.color);

      switch (pwdStrength) {
        case 10:
          this.message = 'خیلی ضعیف';
          break;
        case 20:
          this.message = 'ضعیف';
          break;
        case 30:
          this.message = 'خوب';
          break;
        case 40:
          this.message = 'خیلی خوب';
          break;
      }
    } else {
      this.message = '';
    }

  }

  checkStrength(password: string) {
    let force = 0;

    const regex = /[$-/:-?{-~!"^_@`\[\]]/g;
    const lowerLetters = /[a-z]+/.test(password);
    const upperLetters = /[A-Z]+/.test(password);
    const numbers = /[0-9]+/.test(password);
    const symbols = regex.test(password);

    const flags = [lowerLetters, upperLetters, numbers, symbols];

    let passedMatches = 0;
    for (const flag of flags) {
      passedMatches += flag === true ? 1 : 0;
    }

    force += 2 * password.length + (password.length >= 10 ? 1 : 0);
    force += passedMatches * 10;

    force = password.length <= 6 ? Math.min(force, 10) : force;
    force = passedMatches === 1 ? Math.min(force, 10) : force;
    force = passedMatches === 2 ? Math.min(force, 20) : force;
    force = passedMatches === 3 ? Math.min(force, 30) : force;
    force = passedMatches === 4 ? Math.min(force, 40) : force;


    return force;
  }

  private getColor(strength: number) {
    let index = 0;
    if (strength === 10) {
      index = 0;
    } else if (strength === 20) {
      index = 1;
    } else if (strength === 30) {
      index = 2;
    } else if (strength === 40) {
      index = 3;
    } else {
      index = 4;
    }
    this.messageColor = this.colors[index];
    return {
      index: index + 1,
      color: this.colors[index],
    };
  }

  private setBarColors(count: number, color: string) {
    for (let n = 0; n < count; n++) {
      (this as any)['bar' + n] = color;
    }
  }
}
