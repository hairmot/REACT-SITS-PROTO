/**
 * Simulates E-vision form submission by serialising dom
 */

export function triggerAsync(selector) {
	var elem = document.querySelector(selector);
	var id = elem.getAttribute('id')
	var newVal = id.substring(0, id.length - 1) + '=' + elem.value.replace(/ /g, '+');
	var formData = $('form').first().serialize().replace(elem.nextSibling.getAttribute('name'), newVal + '&' + elem.nextSibling.getAttribute('name'));

	return fetch(document.querySelectorAll('form')[0].getAttribute('action'), {
		method: 'POST',
		credentials: "same-origin",
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
		},
		body: formData
	})
}

/**
 * returns state - useful to use for validation after updating state through triggerAsync function.
 */
export function getServerStateJSON() {
	return fetch(document.querySelector('[data-get-state]').getAttribute('href'), { credentials: "same-origin" });
}

//will perform basic equality comparison for all object properties in two objects
export function verifyObjectEquality(clientSide, serverSide) {
		var length = Object.keys(clientSide)
		if (length.length === Object.keys(serverSide).length) {
			return length.map(a => clientSide[a] === serverSide[a]).reduce((a,b) => a && b);
		}
		return false
}
