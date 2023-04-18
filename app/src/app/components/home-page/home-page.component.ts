import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  constructor(private http: HttpClient, private router: Router) {}
  status: string = '';
  async connect() {
    this.status = 'loading';
    await this.http
      .get(
        'https://private-anon-045b5fa334-blissrecruitmentapi.apiary-mock.com/health'
      )
      .subscribe((response: any) => {
        this.status = response['status'];
     
      });
  }
}
