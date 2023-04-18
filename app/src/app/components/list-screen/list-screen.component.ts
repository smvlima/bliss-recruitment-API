import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../../interfaces/question';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-screen',
  templateUrl: './list-screen.component.html',
  styleUrls: ['./list-screen.component.scss'],
})
export class ListScreenComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  textSearch: string = '';
  questionsList: Question[] = [];
  selectedList: number[] = [];
  offset: number = 0;
  hideShareDetails: boolean = true;
  url!: string;
  ngOnInit(): void {
    if (this.router.routerState.snapshot.root.queryParams['filter'] != null) {
      this.textSearch =
        this.router.routerState.snapshot.root.queryParams['filter'];
    }
    if (this.textSearch === '') {
      this.getData();
    }
    if (this.textSearch != '') {
      this.search();
    }
  }
  async getData() {
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
    this.getData();
  }
  async search() {
    this.offset = 0;
    await this.http
      .get(
        `https://private-anon-045b5fa334-blissrecruitmentapi.apiary-mock.com/questions?limit=10&offset=${this.offset}&filter=${this.textSearch}`
      )
      .subscribe((response: any) => {
        this.questionsList = response;
      });
  }
  closeSearch() {
    this.textSearch = '';
    this.router.navigate(['/questions']).then(() => window.location.reload());
  }
  showShareDetails() {
    if (this.textSearch === '') {
      this.url = `${window.location.origin}/questions`;
    } else {
      this.url = `${window.location.origin}/questions?filter=${this.textSearch}`;
    }
    this.hideShareDetails = false;
  }
}
