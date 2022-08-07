import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-bar',
  templateUrl: './info-bar.component.html',
  styleUrls: ['./info-bar.component.less']
})
export class InfoBarComponent implements OnInit {

  name: String = "Nameless Wizard";

  constructor() { }

  ngOnInit(): void {
  }

}
