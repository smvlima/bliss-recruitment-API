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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageQuestionComponent } from './components/page-question/page-question.component';
import { NoConnectivityComponent } from './components/no-connectivity/no-connectivity.component';
import { ShareScreenComponent } from './components/share-screen/share-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingScreenComponent,
    ListScreenComponent,
    RetryActionComponent,
    HomePageComponent,
    QuestionComponent,
    PageQuestionComponent,
    NoConnectivityComponent,
    ShareScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
