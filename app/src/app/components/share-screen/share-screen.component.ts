import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-share-screen',
  templateUrl: './share-screen.component.html',
  styleUrls: ['./share-screen.component.scss']
})
export class ShareScreenComponent {
  constructor(private http: HttpClient) {};
    @Input() url: string = '';
    email!: string;
    shareDetails:boolean = true;

  @Output() close = new EventEmitter();

    share() {
      let data = {
        destination_email: this.email,
        content_url: this.url,
      };
      let headers = new HttpHeaders().set('Content-Type', 'application/json');
      this.http
        .post(
          `https://private-anon-045b5fa334-blissrecruitmentapi.apiary-mock.com/share?`,
          { data },
          { headers }
        )
        .subscribe(
          (response) => {
            alert('Email Sent!');
           },
          (error) => {
            console.log(error);
          }
        );
    }
    copyMessage() {
      navigator.clipboard.writeText(this.url).then(() => {
        alert('Copy to Clipboard!');
      });
    }
    hideShareDetails() {
      this.close.emit(null);

    }
}
