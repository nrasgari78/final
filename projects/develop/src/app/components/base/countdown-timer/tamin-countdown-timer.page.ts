import {Component, Injector, Input, OnInit, Optional, Self} from '@angular/core';
import {BehaviorSubject, filter, NEVER, Observable, scan, timer} from "rxjs";
import {ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl} from "@angular/forms";
import {finalize, switchMap} from "rxjs/operators";


@Component({
  selector: 'tamin-countdown-timer',
  templateUrl: './tamin-countdown-timer.page.html',
  styleUrls: ['./tamin-countdown-timer.page.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: TaminCountdownTimerPage,
    multi: true,
  }
  ]
})
export class TaminCountdownTimerPage implements OnInit, ControlValueAccessor {
  value!: any;
  @Input() startTimer$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  @Input() limit!: number;
  timer$!: Observable<number>
  @Input() inputNo!: number;
  public onChangeFn = (_: any) => {};
  public onTouchedFn = () => {};
  disabled: boolean = false;
  values: string[] = [];
  @Input() required = false;


  //errorHandle
  private errorMessages = new Map<string, () => string>();
  ngControl!: NgControl

  constructor(@Self() @Optional() private _injector: Injector) {
      this.errorMessages.set('required', () => ` ورود اطلاعات ضروری است`);
    this.errorMessages.set('minlength', () => `ورود اطلاعات ضروری است`);

  }

  ngOnInit() {
    this.ngControl = this._injector.get(NgControl);
    this.timer$ = this.startTimer$.pipe(
      switchMap((running: boolean) => {
        return running ? timer(0, 1000).pipe(scan(acc => --acc, this.limit)) : NEVER;
      }),
      filter(t => t >= 0), finalize(() => {
        this.startTimer$.next(false)
      })
    )
  }



  //error Handle
  public get invalid(): any {
    return this.ngControl ? this.ngControl.invalid : false;
  }

  public get showError(): boolean | null {
    if (!this.ngControl) {
      return false;
    }

    const { dirty, touched } = this.ngControl;

    return this.invalid ? (dirty || touched) : false;
  }

  public get errors(): Array<string> {
    if (!this.ngControl) {
      return [];
    }

    const { errors } = this.ngControl;
    // @ts-ignore
    return Object.keys(errors).map(key => this.errorMessages.has(key) ? this.errorMessages.get(key)() : <string>errors[key] || key);
  }

  registerOnChange(fn: any): void {
    this.value = this.values;
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedFn = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: string): void {
    this.value = obj;
  }

  setValue(i: number, event: any) {
    const value: any = event.target.value
    this.values.splice(i, 1, value);
    this.onChangeFn(this.values.join(''));
    this.onTouchedFn();
  }

  onDigitInput(i: number, event: any) {
    let element;
    if (event.key !== 'Backspace')
      element = event.srcElement.nextElementSibling;

    if (event.key === 'Backspace')
      element = event.srcElement.previousElementSibling;

    if (element == null)
      return;
    else ;
    element.focus();
  }

  generateOtpCodeAndSendSms() {
    this.startTimer$.next(true);
  }
}




