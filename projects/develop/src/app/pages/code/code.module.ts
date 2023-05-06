import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodePageRoutingModule } from './code-routing.module';

import { CodePage } from './code.page';
import {HighlightModule, HIGHLIGHT_OPTIONS, HighlightOptions} from 'ngx-highlightjs';
import {TaminIconModule} from "../../components/icon/tamin-icon.module";
import {TaminButtonModule} from "../../components/button/tamin-button.module";
import {TaminChipModule} from "../../components/chip/tamin-chip.module";

// @ts-ignore
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodePageRoutingModule,
    HighlightModule,
    TaminIconModule,
    TaminButtonModule,
    TaminChipModule,
  ],
  declarations: [CodePage],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: <HighlightOptions>{
        lineNumbers: true,
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          xml: () => import('highlight.js/lib/languages/xml'),
        },
      },
    }
  ],
  exports: [HighlightModule, CodePage]
})
export class CodePageModule {}
