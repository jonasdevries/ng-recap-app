import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dir-details',
  templateUrl: './dir-details.component.html',
  styleUrls: ['./dir-details.component.css']
})
export class DirDetailsComponent implements OnInit {

  showDetails = false;
  logToggles = [];
  n: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleDetails(){
    this.showDetails = !this.showDetails;
    this.logToggles.push(new Date());
  }

}
