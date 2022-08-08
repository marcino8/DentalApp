import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from "primeng/button";
import {AccordionModule} from "primeng/accordion";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {GalleriaModule} from "primeng/galleria";
import {ImageModule} from "primeng/image";
import {FieldsetModule} from "primeng/fieldset";
import {ScrollTopModule} from "primeng/scrolltop";
import {PanelModule} from "primeng/panel";
import {TreeTableModule} from "primeng/treetable";
import {CarouselModule} from "primeng/carousel";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {ToastModule} from "primeng/toast";
import {DialogModule} from "primeng/dialog";
import {MultiSelectModule} from "primeng/multiselect";
import {ContextMenuModule} from "primeng/contextmenu";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {GMapModule} from "primeng/gmap";
import {SidebarModule} from "primeng/sidebar";
import {ScrollPanel, ScrollPanelModule} from "primeng/scrollpanel";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    AccordionModule,
    BrowserAnimationsModule,
    GalleriaModule,
    ImageModule,
    FieldsetModule,
    ScrollTopModule,
    PanelModule,
    CarouselModule,
    TreeTableModule,
    CardModule,
    GMapModule,
    SidebarModule,
    ScrollPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
