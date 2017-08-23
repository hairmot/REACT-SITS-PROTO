import retrieveState from '../util/retrieveState';

function Reducer(state = defaultState, action) {
	switch (action.type) {

		case 'updateValue' :
			return Object.assign({}, state, {value:action.value, saved:false})

	  case 'savingValue' :
			return Object.assign({}, state, {loading:true});

		case 'valueSaved':
		  return Object.assign({}, state, {loading:false, saved:action.result});

		default:
			if (retrieveState()) {
				var newState = JSON.parse(retrieveState());
				return newState;
			}
			else {
				return state;
			}
	}
}

var defaultState = {
	value: "",
	saved:true,
	loading:false
}

export default Reducer;
