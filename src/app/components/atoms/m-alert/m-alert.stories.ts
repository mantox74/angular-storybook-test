import { CommonModule } from '@angular/common';

import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { AlertObj, MAlertComponent, Alert } from './m-alert.component';

export default {
  title: 'Atoms/MAlert',
  component: MAlertComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with storybook
      declarations: [MAlertComponent, NgbAlert],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<MAlertComponent> = (args: MAlertComponent) => ({
  props: args,
});

export const Warning = Template.bind({});

export const Danger = Template.bind({});
const alertDanger: Alert = new AlertObj();
alertDanger.type = 'danger';
Danger.args = { alert: alertDanger };

export const Success = Template.bind({});
const alertSuccess: Alert = new AlertObj();
alertSuccess.type = 'success';
Success.args = { alert: alertSuccess };
