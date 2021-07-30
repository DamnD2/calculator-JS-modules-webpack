export default class DefaultComponent {
  constructor(props) {
    if (this.constructor == DefaultComponent) {
      throw new Error('You cannot instantiate an abstract class DefaultComponent');
    }

    this.props = props;
  }
}
