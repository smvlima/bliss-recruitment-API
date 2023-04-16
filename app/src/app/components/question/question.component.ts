import { Component, Input, OnInit  } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Question} from '../../interfaces/question';



@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() questionId?:string;

  constructor(private http: HttpClient) {}
  email!: string;
  question!: Question;

  ngOnInit() {

    this.http.get(
      `https://private-anon-045b5fa334-blissrecruitmentapi.apiary-mock.com/questions/${this.questionId}`
    ).subscribe((response : any)=>{
      this.question = response;
    });
  }
  share(){
    let data = {destination_email : this.email, content_url : `https://private-anon-045b5fa334-blissrecruitmentapi.apiary-mock.com/questions/${this.questionId}` };
    let headers = new HttpHeaders()
    .set('Content-Type', 'application/json');
    this.http.post(`https://private-anon-045b5fa334-blissrecruitmentapi.apiary-mock.com/share?`, {data}, {headers}).subscribe(
      (response) => {
        console.log(response);

      }, (error) => {
        console.log(error);

      }
    )
  }

}
