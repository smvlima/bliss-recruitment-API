import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../../interfaces/question';

@Component({
  selector: 'app-list-screen',
  templateUrl: './list-screen.component.html',
  styleUrls: ['./list-screen.component.scss'],
})
export class ListScreenComponent implements OnInit {
  constructor(private http: HttpClient) {}
  textSearch: string = '';
  questionsList: Question[] = [];
  selectedList: number[] = [];
  offset: number = 10;
  async ngOnInit(): Promise<void> {
    await this.http
      .get(
        `https://private-anon-045b5fa334-blissrecruitmentapi.apiary-mock.com/questions?limit=10&offset=${this.offset}`
      )
      .subscribe((response: any) => {
        this.questionsList = response;
      });
  }
  select(id: number) {
    if (this.selectedList.includes(id)) {
      let index = this.selectedList.indexOf(id);
      if (index !== -1) {
        this.selectedList.splice(index, 1);
      }
    } else {
      this.selectedList = [...this.selectedList, id];
    }
  }
  loadMore() {
    this.offset += 10;
  }
  async search() {
    this.offset = 10;
    await this.http.get(
      `https://private-anon-045b5fa334-blissrecruitmentapi.apiary-mock.com/questions?limit=10&offset=${this.offset}&filter=${this.textSearch}`
    ) .subscribe((response: any) => {
      this.questionsList = response;
    });
  }
  closeSearch() {
    this.textSearch = '';
  }
}
