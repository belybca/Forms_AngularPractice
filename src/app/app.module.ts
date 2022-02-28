import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BasicosComponent } from './reactive/basicos/basicos.component';
import { DinamicosComponent } from './reactive/dinamicos/dinamicos.component';
import { SwitchesComponent } from './reactive/switches/switches.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicosComponent,
    DinamicosComponent,
    SwitchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
