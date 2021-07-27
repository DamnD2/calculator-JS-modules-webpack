import Keyboard from "../KeyBoard/Keyboard";
import mock_keyboardButtons from "../../MOCK/mock_keyboardButtons";
import mock_keyboardTemplate from "../../MOCK/mock_keyboardTemplate";
import Display from "../Display/Display";
import './App.scss';
import createElement from "../../utils/createElement";

export default class App{
	constructor(){
		this.keyboardButtons = mock_keyboardButtons;
		this.keyboardTemplate = mock_keyboardTemplate;
	}

	lastClickedItem (item) {
		console.log(item.innerText);
	}

	render(){
		const calculator = createElement('div', 'calculator');
		const keyboard = new Keyboard({
					classList: 'calculator__keyboard',
					keyboardButtons: this.keyboardButtons,
					keyboardTemplate: this.keyboardTemplate,
					lastClickedItem: this.lastClickedItem,
				});
		const display = new Display({classList: 'calculator__display'});

		calculator.append(display.render(), keyboard.render());

		return calculator;
	}
}
