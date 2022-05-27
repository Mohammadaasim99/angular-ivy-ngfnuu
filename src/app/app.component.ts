import { HttpClient } from '@angular/common/http';
import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  data: any;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.data = this.http.get('./data.json');
  }
}
