export default class DefaultComponent {
	constructor (props) {
		this.props = props;
		if(this.constructor == DefaultComponent){
			return console.error('you cannot instantiate an abstract class Default')
		}
	}
}