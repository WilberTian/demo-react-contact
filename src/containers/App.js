import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import ContactList from '../components/ContactList';
import AddContactModal from '../components/AddContactModal';
import EditContactModal from '../components/EditContactModal';
import * as actions from '../redux/actions';

export class App extends Component {
    constructor(props, context) {
        super(props, context);
        
        this.state = {
            editContactIdx: -1
        };
    }
    
    render() {
        return (
        <div className="row">
            <div id="main-content" className="panel panel-primary" >
                <div className="panel-heading">
                    <span className="panel-title">Contact</span>
                    <button className="btn btn-default btn-sm pull-right" onClick={this._openAddModal}><span className="glyphicon glyphicon-plus"></span></button>
                </div>
                <div className="panel-body">
                    <ContactList contacts={this.props.contacts} 
                        deleteItemAction={this.props.actions.deleteItem}
                        setEditContactIdx={this._setEditContactIdx.bind(this)}
                    />
                </div>
            </div>
            <AddContactModal addItemAction={this.props.actions.addItem}/>
            <EditContactModal  editContactIdx={this.state.editContactIdx} editItemAction={this.props.actions.editItem}/>
            
        </div>
        );
    }
    
    _openAddModal() {
		$('#add_contact_modal').modal('show');
        
        $('#add_contact_modal').on('shown.bs.modal', function () {
            $('#contact_name').focus()
        })
		
	}
    
    _setEditContactIdx(idx) {
        var contacts = this.state.contacts;
        
        this.setState({
            editContactIdx: idx
        });
    }
}

var mapStateToProps = function (state) {
    return state;
};

var mapDispatchToProps = function (dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
