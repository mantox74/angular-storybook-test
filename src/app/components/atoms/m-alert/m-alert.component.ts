import { Component, Input, OnInit } from '@angular/core';

export interface Alert {
  type: string;
  text?: string;
  dismissible: boolean;
  btnText?: string;
}

export class AlertObj implements Alert {
  type = 'warning';
  text = 'Messaggio di alert';
  dismissible = false;
  btnText = undefined;
}

@Component({
  selector: 'm-alert',
  templateUrl: './m-alert.component.html',
  styleUrls: ['./m-alert.component.scss'],
})
export class MAlertComponent implements OnInit {
  @Input() alert: Alert = new AlertObj();

  constructor() {
    console.log(this.alert);
  }

  ngOnInit(): void {}
}
