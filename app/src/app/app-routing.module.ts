import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { QuestionComponent } from './components/question/question.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'question/:questionId', component: QuestionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
