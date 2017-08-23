import {triggerAsync, getServerStateJSON} from './shared.js';

/**
 * Update state - client side only
 */
export function updateValue(value) {
	return {
		type: 'updateValue',
		value
	}
}

/**
 * Persist state Async
 */
export function startSavingValue(value) {
	return function (dispatch) {

		//update state to loading state
		dispatch(savingValue());

		//update SITS inputs
		$('[data-value-input]').val(value);

		//fire off the request
		triggerAsync('[data-value-button]')
				//fetch state once request complete so that we can verify changes we persisted
				.then(response => getServerStateJSON())
				.then(response => response.json())

				//update state to loading complete and display outcome of verification
				.then(response => dispatch(valueSaved(value === response.value)
		));
	}
}

export function valueSaved(result) {
	return {
		type: 'valueSaved',
		result
	}
}

export function savingValue() {
	return {
		type: 'savingValue'
	}
}
