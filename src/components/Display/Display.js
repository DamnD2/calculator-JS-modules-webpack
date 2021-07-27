import createElement from "../../utils/createElement";
import DefaultComponent from "../DefaultComponent/DefaultComponent";
import './Display.scss';

export default class Display extends DefaultComponent{
	constructor(props) {
		super(props)

		this.expressionField = createElement('div', 'calculator__display-expression');
		this.resultField = createElement('div', 'calculator__display-result');
	}

	setFieldValue (field, value) {
		field = field.innerText = value;
	}

	render() {
		const display = createElement('div', this.props.classList);
		
		this.setFieldValue(this.expressionField, 123);
		this.setFieldValue(this.resultField, 12345);

		display.append(this.expressionField, this.resultField);

		return display;
	}
}