import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {EditorModule} from 'primeng/editor';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    EditorModule,
    ButtonModule,
    DialogModule,
    InputTextareaModule,
    TableModule,
    HttpClientModule,
    ReactiveFormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
