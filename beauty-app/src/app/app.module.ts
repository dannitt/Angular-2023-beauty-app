import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BodyComponent } from './body/body.component';
import { CatalogComponent } from './catalog/catalog.component';
import { BlogComponent } from './blog/blog.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { UserModule } from './user/user.module';
import { MainModule } from './main/main.module';
import { ContactsComponent } from './contacts/contacts.component';
import { SharedModule } from './shared/shared.module';
import { appInterseptorProvider } from './app.interseptor';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { ErrorService } from './core/error/error.service';
import { ErrorComponent } from './core/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    CatalogComponent,
    BlogComponent,
    HomeComponent,
    ContactsComponent,
    AuthenticateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    UserModule,
    MainModule,
    SharedModule,
  
  ],
  providers: [appInterseptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }

