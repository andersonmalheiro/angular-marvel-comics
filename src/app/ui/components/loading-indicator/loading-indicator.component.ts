import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-indicator',
  template: `
    <div class="loading-container">
      <img src="assets/logo.svg" alt="loading" />
      <p [innerText]="message ? message : 'Loading...'"></p>
    </div>
  `,
  styleUrls: ['./loading-indicator.component.scss'],
})
export class LoadingIndicatorComponent implements OnInit {
  @Input() public message?: string;

  constructor() {}

  ngOnInit() {}
}
