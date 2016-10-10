import {Component} from '@angular/core';

@Component({
  selector: 'footer',
  styles: [require('./footer.scss')],
  template: require('./footer.html')
})
export class Footer {
  year = (new Date()).getFullYear();

  constructor() {

  }
}
