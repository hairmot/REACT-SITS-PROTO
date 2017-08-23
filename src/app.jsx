import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import SaveButton from './components/SaveButton';
import * as valueActions from './Actions/valueActions';



class App extends React.Component {

	save = () => {
		this.props.actions.startSavingValue(this.props.value);
	}

	render() {
		return (
			<div>
				<label className="sv-form-control-static sv-col-md-4 sv-text-right">Value</label>
				<div className="sv-col-md-4">
					<input className="sv-form-control" onChange={(e) => this.props.actions.updateValue(e.target.value)} value={this.props.value} />
				</div>
				<div className="sv-col-md-2">
					<SaveButton save={this.save} saved={this.props.saved} loading={this.props.loading} ></SaveButton>
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = function (dispatch, ownProps) {
	return { actions: bindActionCreators(valueActions, dispatch) }
}

const mapStateToProps = function (store, ownProps) {
	return store
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
