import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-question',
  templateUrl: './page-question.component.html',
  styleUrls: ['./page-question.component.scss'],
})
export class PageQuestionComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  questionId!: string;
  ngOnInit() {
    if (this.route.snapshot.paramMap.get('questionId') !== null) {
      this.questionId = this.route.snapshot.paramMap.get('questionId')!;
    }
  }
  goBack(){
    this.router.navigate(['/questions']);
  }
}
