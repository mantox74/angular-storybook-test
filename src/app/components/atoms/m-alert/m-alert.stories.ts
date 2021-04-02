import { CommonModule } from '@angular/common';

import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { MAlertComponent } from './m-alert.component';

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
Warning.args = {
  // alert: {
  //   type: 'warning',
  //   dismissible: true,
  //   text: 'testo da stampare nel messaggio',
  // },
};
