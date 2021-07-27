export default class DefaultComponent {
	constructor (props) {
		this.props = props;
		if(this.constructor == DefaultComponent){
			throw new Error('you cannot instantiate an abstract class Default');
		}
	}
}