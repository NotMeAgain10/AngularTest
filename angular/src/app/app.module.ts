import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BaseInterceptor } from 'src/app/services/BaseInterceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandmarkService } from './services/landmark/landmark.service';
import { LoaderService } from './services/loader/loader.service';
import { LoaderComponent } from './components/loader/loader.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TwoColumnsLayoutComponent } from './layouts/two-columns-layout/two-columns-layout.component';
import { LandmarkGridComponent } from './components/landmark-grid/landmark-grid.component';
import { LandmarkCardComponent } from './components/landmark-card/landmark-card.component';
import { TitleComponent } from './components/title/title.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LandmarkViewComponent } from './pages/landmark-view/landmark-view.component';
import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';
import { AuthService } from './services/auth/auth.service';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    NavigationComponent,
    TwoColumnsLayoutComponent,
    LandmarkGridComponent,
    LandmarkCardComponent,
    TitleComponent,
    AutocompleteComponent,
    HomeComponent,
    NotFoundComponent,
    LandmarkViewComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgImageFullscreenViewModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseInterceptor,
      multi: true
    },
    LandmarkService,
    LoaderService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
