import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LocalStorageService } from './services/local-storage.service';
import { SessionStorageService } from './services/session-storage.service';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
  ],
  // TODO 1 Solution
  providers: [{ provide: LocalStorageService, useClass: SessionStorageService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
