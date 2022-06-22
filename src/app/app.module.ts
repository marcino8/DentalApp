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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
