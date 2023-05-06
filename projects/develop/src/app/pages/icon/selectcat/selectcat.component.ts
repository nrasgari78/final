import {Component} from '@angular/core';
import {BehaviorSubject, tap} from "rxjs";
import {Clipboard} from "@angular/cdk/clipboard";
import {IconService} from "../icon-service/icon.service";
import {TaminBaseService} from "../../../provider/base/base.service";
import {debounceTime, map, shareReplay} from "rxjs/operators";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'tamin-selectcat',
  templateUrl: './selectcat.component.html',
  styleUrls: ['./selectcat.component.scss']
})
export class SelectcatComponent {
  icons: any[] = [];
  searchIcons: any[] = [];

  term: BehaviorSubject<string> = new BehaviorSubject<string>('all');
  category: any;
  selectedCat: any
 empty: boolean=true;

  constructor(private _clipboard: Clipboard, private iconService: IconService, private baseService: TaminBaseService,
              private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {

    let selectedCat: any

    if (this.route.snapshot.paramMap.get("id"))
      selectedCat = this.route.snapshot.paramMap.get("id");
    else
      selectedCat = ''
    this.showIcons(selectedCat);

  }

  showIcons(item: string) {
    this.iconService.getIcons(item).subscribe(res => {
      this.icons = res
    })
  }

  openPopover(name: string) {
    const data = '<tamin-icon size="large" color="primary" name="' + name + '"></tamin-icon>'
    const msg = 'کپی شد &lt;tamin-icon size="medium" color="primary" name="' + name + '" &gt; &lt;/tamin-icon &gt; '
    this._clipboard.copy(data);
    // this.baseService.showToast( 'کپی شد', 'success')
    this.baseService.showToast(msg, 'success')
  }

  search(event: any) {
    let searchTerm: any
    if (event) {
      searchTerm = event.detail.value;
      this.term.next(searchTerm);
      this.term.pipe(
        debounceTime(1000),
        map(searchTerm => this.icons.filter((i: any) => `${i.name}`.match(searchTerm))),
        shareReplay(1),
        tap(res => console.log(res))
      ).subscribe(res => {
        this.searchIcons = res;
        if(this.searchIcons.length===0)
          this.empty=false

      })
    }
  }
}
