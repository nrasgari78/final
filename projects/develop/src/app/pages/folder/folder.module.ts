import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { TaminAvatarModule } from "../../components/avatar/tamin-avatar.module";
import { TaminBadgeModule } from "../../components/badge/tamin-badge.module";
import { TaminButtonModule } from "../../components/button/tamin-button.module";
import { TaminChipModule } from "../../components/chip/tamin-chip.module";
import { TaminNoteModule } from "../../components/note/tamin-note.module";
import { TaminTextModule } from "../../components/text/tamin-text.module";
import { TaminThumbnailModule } from "../../components/thumbnail/tamin-thumbnail.module";
import { TaminCardModule } from "../../components/card/tamin-card.module";
import {DataTableRowPageModule} from "../data-table/data-table-row/data-table-row.module";
import {TaminLayoutModule} from "../../components/layout/tamin-layout.module";
import {TaminIconModule} from "../../components/icon/tamin-icon.module";
import {InformationModule} from "../../components/information/information.module";
import {TaminProgressBarModule} from "../../components/progress-bar/tamin-progress-bar.module";
import {SelectSearchableModule} from "../../components/select-searchable/select-searchable.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    TaminAvatarModule,
    TaminBadgeModule,
    TaminButtonModule,
    TaminChipModule,
    TaminNoteModule,
    TaminTextModule,
    TaminThumbnailModule,
    TaminCardModule,
    DataTableRowPageModule,
    TaminLayoutModule,
    TaminIconModule,
    InformationModule,
    ReactiveFormsModule,
    TaminProgressBarModule,
    SelectSearchableModule,
  ],
  declarations: [FolderPage]
})
export class FolderPageModule {}
