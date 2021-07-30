import createElement from '../../utils/createElement';
import DefaultComponent from '../DefaultComponent/DefaultComponent';
import './Display.scss';

export default class Display extends DefaultComponent {
  constructor(props) {
    super(props);

    this.expressionField = createElement('div', 'calculator__display-expression');
    this.resultField = createElement('div', 'calculator__display-result');
  }

  showExpressionField(value) {
    this.expressionField.innerText = value;
  }

  showResultField(value) {
    this.resultField.innerText = value;
  }

  render() {
    const display = createElement('div', this.props.classList);

    this.showExpressionField('');
    this.showResultField(0);

    display.append(this.expressionField, this.resultField);

    return display;
  }
}
