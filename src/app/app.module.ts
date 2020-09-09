import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { HeaderComponent } from './header/header.component';
import { EventFormComponent } from './event-form/event-form.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    SchedulerComponent,
    HeaderComponent,
    EventFormComponent
  ],
  imports: [
    BrowserModule,
    SchedulerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    DateInputsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
