import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { ListScreenComponent } from './components/list-screen/list-screen.component';
import { RetryActionComponent } from './components/retry-action/retry-action.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { QuestionComponent } from './components/question/question.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoadingScreenComponent,
    ListScreenComponent,
    RetryActionComponent,
    HomePageComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
