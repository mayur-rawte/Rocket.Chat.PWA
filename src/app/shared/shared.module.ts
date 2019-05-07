import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';

import {ApolloModule} from 'apollo-angular';
import {ReactiveFormsModule} from '@angular/forms';
import {ServiceWorkerModule} from '@angular/service-worker';

import {UnixTimeToStringPipe} from './pipes/unix-time-to-string/unix-time-to-string.pipe';
import {DefaultAvatarPipe} from './pipes/default-avatar/default-avatar.pipe';
import {PushNotificationsService} from './services/push-notifications.service';
import {ScrollerService} from './services/scroller.service';
import {IonicModule} from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    ServiceWorkerModule,
    IonicModule,
    ApolloModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ApolloModule,
    UnixTimeToStringPipe,
    DefaultAvatarPipe
  ],
  declarations: [UnixTimeToStringPipe, DefaultAvatarPipe],
  providers: [PushNotificationsService, ScrollerService],
})
export class SharedModule {
}
