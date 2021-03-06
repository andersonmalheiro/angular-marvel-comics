import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-indicator',
  template: `
    <div class="empty-container">
      <img src="/assets/sad.png" alt="loading" />
      <p [innerText]="message ? message : 'No data...'"></p>
    </div>
  `,
  styleUrls: ['./empty-indicator.component.scss'],
})
export class EmptyIndicatorComponent implements OnInit {
  @Input() public message?: string;

  constructor() {}

  ngOnInit() {}
}
