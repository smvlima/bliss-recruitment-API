import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-connectivity',
  templateUrl: './no-connectivity.component.html',
  styleUrls: ['./no-connectivity.component.scss']
})
export class NoConnectivityComponent implements OnInit{
  ngOnInit(): void {
    document.body.style.overflow = 'hidden';
  }

}
