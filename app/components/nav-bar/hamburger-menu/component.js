import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class NavBarHamburgerMenu extends Component {
  @tracked isOpen = null;

  get isClose() {
    return this.isOpen === false;
  }

  get menuState() {
    if (this.isOpen) {
      return '-open';
    }

    if (this.isClose) {
      return '-close';
    }
    return null;
  }

  @action
  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
