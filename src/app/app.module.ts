import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KameshComponent } from './kamesh/kamesh.component';
import { DataDetailComponent } from './data-detail/data-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    KameshComponent,
    DataDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
