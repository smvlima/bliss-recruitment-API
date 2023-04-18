import { Component, Input, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Question } from '../../interfaces/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  @Input() questionId?: string;



  constructor(private http: HttpClient) {}
  question!: Question;
  url: string = '';
  shareDetails: boolean = false;
  hideShareDetails = true;

  ngOnInit() {
    this.url = `${window.location.origin}/questions/${this.questionId}`;
    this.http
      .get(
        `https://private-anon-045b5fa334-blissrecruitmentapi.apiary-mock.com/questions/${this.questionId}`
      )
      .subscribe((response: any) => {
        this.question = response;
      });
  }

  vote(
    selectedQuestion: number,
    selectedChoice: string,
    selectedChoiceVotes: number
  ) {
    const body = {
      choices: [
        {
          choice: selectedChoice,
          votes: selectedChoiceVotes + 1,
        },
      ],
    };
    this.http
      .put(
        `https://private-anon-233ebff702-blissrecruitmentapi.apiary-mock.com/questions/${selectedQuestion}`,
        { body }
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  showShareDetails(){
    this.hideShareDetails = false;
  }


}
