import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PageQuestionComponent } from './components/page-question/page-question.component';
import { ListScreenComponent } from './components/list-screen/list-screen.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'questions',
    component: ListScreenComponent
  },
  { path: 'questions/:questionId', component: PageQuestionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
