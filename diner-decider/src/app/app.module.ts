import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavigationComponent } from './navigation/navigation.component';

import {MapModule} from './map/map.module';
import {GlobalService} from './global.service';
import { CommonModule } from '@angular/common';
import { ListingDetailComponent } from './listing-detail/listing-detail.component';;
import { ListingService } from "./listing/listing.service";

import { ZomatoService } from './zomato.service';
import { LocationService } from './location.service';
import { DinerDeciderComponent } from './diner-decider/diner-decider.component';
import { CreateRoomComponent } from './diner-decider/create-room/create-room.component';
import { RoomComponent } from './diner-decider/room/room.component';
import { ListingComponent } from './listing/listing.component';
import { DropDropdownDirective } from './navigation/drop-dropdown.directive';
import { KeysPipe } from './keys.pipe';
import { MapKeysPipe } from './map-keys.pipe';

export const firebaseConfig = {
  apiKey: "AIzaSyAxWgj8AXlnz3C5z0jmJxs3dDd4oiogFmw",
  authDomain: "orderthat-7276b.firebaseapp.com",
  databaseURL: "https://orderthat-7276b.firebaseio.com",
  projectId: "orderthat-7276b",
  storageBucket: "orderthat-7276b.appspot.com",
  messagingSenderId: "940617937983"
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ListingComponent,
    ListingDetailComponent,
    NavigationComponent,
    DinerDeciderComponent,
    CreateRoomComponent,
    RoomComponent,
    DropDropdownDirective,
    KeysPipe,
    MapKeysPipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    BrowserAnimationsModule,
    MapModule
  ],
  exports: [
    ListingComponent,
    ListingDetailComponent
  ],
  providers: [ZomatoService, LocationService, GlobalService, ListingService],
  bootstrap: [AppComponent]
})
export class AppModule { }