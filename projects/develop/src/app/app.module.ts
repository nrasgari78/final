import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule } from '@ionic/angular';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { TaminAuthInterceptor } from './provider/authInterceptor/tamin-auth.interceptor';
import { TaminSecurityService } from "./provider/security/tamin-security.service";
import {HighlightModule, HIGHLIGHT_OPTIONS, HighlightOptions} from 'ngx-highlightjs';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxEchartsModule} from "ngx-echarts";
import {ApplicationConfig} from "./model/application-config-model";
import {Config} from "./application-config";
import {TaminItemModule} from "./components/item/tamin-item.module";
import {TaminBaseModule} from "./components/base/tamin-base.module";
import {TaminSegmentModule} from "./components/segment/tamin-segment.module";
import {TaminChipModule} from "tamin-next";
import {TaminSteperModule} from "./components/steper/tamin-steper.module";
import {TaminPaginationModule} from "./components/pagination/tamin-pagination.module";
import {TaminClientSearchbarModule} from "./components/client-searchbar/tamin-client-searchbar.module";
import {TaminChangeAddressModule} from "./components/base/change-address/tamin-change-address.module";
import {InformationModule} from "./components/information/information.module";
import {TaminIconModule} from "./components/icon/tamin-icon.module";
import {SelectSearchableModule} from "./components/select-searchable/select-searchable.module";
import {TaminModalPageModule} from "./components/select-searchable/modal-page/tamin-modal-page.module";




export const AppConfig: ApplicationConfig = {
  ...Config
};

@NgModule({
    declarations: [AppComponent,],
  imports: [FormsModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, HighlightModule, ReactiveFormsModule, NgxEchartsModule.forRoot({
    echarts: () => import('echarts')
  }), TaminItemModule, TaminBaseModule, TaminSegmentModule, TaminChipModule, TaminSteperModule, TaminPaginationModule,
    TaminClientSearchbarModule, TaminChangeAddressModule, InformationModule, TaminIconModule,TaminModalPageModule
  ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},
        TaminSecurityService,
        {provide: HTTP_INTERCEPTORS, useClass: TaminAuthInterceptor, multi: true},
        {provide: 'applicationConfig', useValue: AppConfig},
        {
            provide: HIGHLIGHT_OPTIONS,
            useValue: <HighlightOptions>{
                coreLibraryLoader: () => import('highlight.js/lib/core'),
              languages: {
                    typescript: () => import('highlight.js/lib/languages/typescript'),
                    css: () => import('highlight.js/lib/languages/css'),
                    xml: () => import('highlight.js/lib/languages/xml'),
                },
            },
        },],
    bootstrap: [AppComponent],
    exports: [

    ]
})
export class AppModule {}
