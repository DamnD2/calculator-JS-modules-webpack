import Button from '../Button/Button';
import createElement from '../../utils/createElement';
import './Keyboard.scss';
import DefaultComponent from '../DefaultComponent/DefaultComponent';

export default class Keyboard extends DefaultComponent {
  constructor(props) {
    super(props);

    this.keyboardButtons = this.props.keyboardButtons;
    this.keyboardTemplate = this.props.keyboardTemplate;
  }

  get getKeyboard() {
    return this.keyboardTemplate.reduce((acc, buttonsRow) => {
      buttonsRow.forEach((buttonsRowElement) => {
        const button = this.keyboardButtons.find((btn) => btn.value == buttonsRowElement);
        button && acc.push(button);
      });
      return acc;
    }, []);
  }

  render() {
    const keyboard = createElement('div', this.props.classList);
    const resultKeyboard = this.getKeyboard;

    keyboard.onclick = (event) => {
      if (event.target.classList.contains('calculator__keyboard') === false) {
        this.props.handleClick(event.target.closest('button'));
      }
    };

    resultKeyboard.forEach((element) => {
      const button = new Button({ value: element.value, type: element.type });
      keyboard.append(button.render());
    });

    return keyboard;
  }
}
