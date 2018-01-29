import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavigationComponent } from './navigation/navigation.component';

import { ZomatoService } from './zomato.service';
import { PickerComponent } from './picker/picker.component';
import { CreateRoomComponent } from './picker/create-room/create-room.component';
import { RoomComponent } from './picker/room/room.component';

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
    NavigationComponent,
    PickerComponent,
    CreateRoomComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [ZomatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }