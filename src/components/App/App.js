import Keyboard from "../KeyBoard/Keyboard";
import mock_keyboardButtons from "../../MOCK/mock_keyboardButtons";
import mock_keyboardTemplate from "../../MOCK/mock_keyboardTemplate";
import Display from "../Display/Display";
import './App.scss';
import createElement from "../../utils/createElement";
import calculate from "../../utils/calculate";

export default class App{
	constructor(){
		this.keyboardButtons = mock_keyboardButtons;
		this.keyboardTemplate = mock_keyboardTemplate;

		this.display = new Display({classList: 'calculator__display'});
		this.lastClickedButton = null;
		this.expressionFieldValue = '';
		this.resultFieldValue = '0';
		this.maxResultFieldLength = 8;
	}

	onClick = button => {
		const firstOperandIndex = 0;
		const operatorIndex = 1;
		const firstOperand = this.expressionFieldValue.split(' ')[firstOperandIndex];
		const operator = this.expressionFieldValue.split(' ')[operatorIndex];


		if (button.classList.contains('number')) {
			if (button.value === '.' && this.resultFieldValue.indexOf('.') !== -1) {
				return;
			}

			else if (operator && this.resultFieldValue === firstOperand && this.lastClickedButton.classList.contains('operator')) {
				this.resultFieldValue = button.value;
				this.display.showResultField(this.resultFieldValue);
				this.lastClickedButton = button;
				return;
			}

			else if (this.lastClickedButton && this.lastClickedButton.classList.contains('operator')) {
				this.resultFieldValue = button.value;
			}

			else if (this.resultFieldValue.length < this.maxResultFieldLength) {
				if (this.resultFieldValue === '0' && button.value !== '.') {
					this.resultFieldValue = button.value;
				} else {
					this.resultFieldValue += button.value;
				}
			}
			else if (this.expressionFieldValue.indexOf('=') !== -1) {
				this.expressionFieldValue = '';
				this.resultFieldValue = button.value;
			}
		}



		if (button.classList.contains('operator')) {
			if (!operator || operator !== button.value ) {
				this.expressionFieldValue = `${this.resultFieldValue} ${button.value} `
				this.display.showExpressionField(this.expressionFieldValue);
			}

			if (this.expressionFieldValue.indexOf('=') !== -1) {
				this.expressionFieldValue = `${this.resultFieldValue} ${button.value}`;
				this.display.showExpressionField(this.expressionFieldValue);
			}
			else if (operator && this.lastClickedButton.classList.contains('number')) {
				const result = calculate(operator, firstOperand, this.resultFieldValue, this.maxResultFieldLength);
				this.resultFieldValue = result;
				this.expressionFieldValue = `${result} ${button.value} `;
			}
		}



		if (button.classList.contains('reset')) {
			this.expressionFieldValue = '';
			this.resultFieldValue = '0';
		}



		if (button.classList.contains('equal')) {
			if (!this.expressionFieldValue || operator === '=') {
				this.expressionFieldValue = `${this.resultFieldValue} = `;
			} else {
				this.resultFieldValue = calculate(operator, firstOperand, this.resultFieldValue, this.maxResultFieldLength);
				this.expressionFieldValue = `${this.resultFieldValue} ${operator} ${firstOperand} = `;
			}
		}
		

		this.display.showExpressionField(this.expressionFieldValue);
		this.display.showResultField(this.resultFieldValue);
		this.lastClickedButton = button;
	}
	

	render(){
		const calculator = createElement('div', 'calculator');
		const keyboard = new Keyboard({
					classList: 'calculator__keyboard',
					keyboardButtons: this.keyboardButtons,
					keyboardTemplate: this.keyboardTemplate,
					handleClick: this.onClick,
				});
		

		calculator.append(this.display.render(), keyboard.render());

		return calculator;
	}
}
