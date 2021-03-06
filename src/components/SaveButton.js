import React from 'react';

export default class SaveButton extends React.Component {
    render() {
        var button = this.props.saved ? { class: 'sv-btn-success', label: 'Saved', onClick: () => { this.props.delete() }, disabled: typeof(this.props.delete) !== 'function' } :
            this.props.loading ? { class: 'sv-btn-warning', label: 'Saving', onClick: () => {}, disabled: true } : { class: 'sv-btn-danger', label: 'Save', onClick: () => { this.props.save() }, disabled: typeof(this.props.save) !== 'function' }

        return <button onClick = { button.onClick }
        className = { 'sv-btn sv-btn-block ' + button.class }
        type = "button"
        disabled = { button.disabled } > { button.label } </button>
    }
}