import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddValueComponent } from './add-value/add-value.component';
import { SettingsComponent } from './settings/settings.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from './services/common.service';

/**
 * Although routes should be protected for specific user roles, 
 * but not doing so for this task because implementing user specific access is 
 * out of scope of this task
 * */
const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch:'full'},
  { path: 'add-value', component: AddValueComponent },
  { path: 'settings', component: SettingsComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddValueComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
