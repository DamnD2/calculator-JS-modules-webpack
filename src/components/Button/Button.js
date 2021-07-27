import createElement from '../../utils/createElement';
import './Button.scss';

export default class Button {
	constructor(value, classList){
		this.value = value;
		this.classList = classList;
	}

	render() {
		const button = createElement('button', this.classList);
		
		button.innerText = this.value;

		return button;
	}
}