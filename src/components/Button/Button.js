import createElement from '../../utils/createElement';
import DefaultComponent from '../DefaultComponent/DefaultComponent';
import './Button.scss';

export default class Button extends DefaultComponent {
  constructor(props) {
    super(props);
    this.value = this.props.value;
    this.type = this.props.type;
  }

  render() {
    const button = createElement('button', this.type);

    button.innerText = this.value;
    button.value = this.value;
    button.dataset.type = this.type;

    return button;
  }
}
