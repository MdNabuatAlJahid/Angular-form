import { Component, OnInit } from '@angular/core';
import { user } from './user';
import { TicketServiceService } from './ticket-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  userModel = new user('', '', '', '', '');
  submitted = false;
  errorMsg = '';

  count: number[] = [0, 0, 0, 0];

  isCollapsed: boolean = true;
  constructor(
    private _TicketServiceService: TicketServiceService,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    let _jsonURL = 'assets/user-info.json';
    this.http.get(_jsonURL).subscribe((data) => {
      console.log(data);
    });
  }

  submit() {
    this.submitted = true;

    console.log(this.userModel);

    // this._TicketServiceService.ticket(this.userModel).subscribe(
    //   (data) => console.log('Success!', data),
    //   (error) => (this.errorMsg = error.statusText)
    // );
  }

  //increament method
  increament(index) {
    this.count[index]++;
    console.log(this.count[index]);
  }
  decriment(index) {
    this.count[index]--;
    this.count[index] = Math.max(0, this.count[index]);
    console.log(this.count[index]);
  }
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
  iterative(index) {
    let it = [];
    for (let i = 0; i < this.count[index]; i++) it.push(i);
    return it;
  }
  iterative2(limit) {
    let it = [];
    for (let i = 0; i < limit; i++) it.push(i);
    return it;
  }
  getName(index) {
    switch (index) {
      case 0:
        return 'VIP Tickets';
      case 1:
        return 'Standard Tickets';
      case 2:
        return 'Student Tickets';
      case 3:
        return 'Special Tickets';
      default:
        '';
    }
  }

  getUser() {}
}
