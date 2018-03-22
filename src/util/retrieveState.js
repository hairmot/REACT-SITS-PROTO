export default function() {
    if (document.querySelector('[data-state]') && document.querySelector('[data-state]').value !== '') {
        console.log('retrieving', document.querySelector('[data-state]').value)
        return document.querySelector('[data-state]').value;
    } else {
        return false;
    }
}