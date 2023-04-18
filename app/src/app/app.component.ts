import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  disconnected:boolean = false;
  title = 'app';
  @HostListener("window:online", ["$event"])
  onlineEvent(event: Event) {
    this.processOnline(event);
  }
  processOnline(event: Event){
    if (event.type == "online") {
      this.disconnected = false;
      alert('You become online');
    }
  }
  @HostListener("window:offline", ["$event"])
  offlineEvent(event: Event) {
    this.disconnected = true;
    this.processOfflineEvent(event);
  }
  processOfflineEvent(event: Event){
    if (event.type == "offline") {
       alert('You went offline');
    }
  }
}
