import React, { Component } from 'react';

class ContactModal extends Component {
    render() {
        return(
            <div id="add_contact_modal" className="modal fade" tabindex="-1" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title">Add a new contact</h4>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="contact_name" className="control-label">Name:</label>
                                    <input type="text" className="form-control" id="contact_name"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contact_number" className="control-label">Number:</label>
                                    <input type="text" className="form-control" id="contact_number"/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this._clearContactForm.bind(this)}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={this._addContactHandler.bind(this)}>Add</button>
                        </div>
                    </div> 
                </div> 
            </div> 
		);
    }
    
    _addContactHandler(e) {
		e.preventDefault();
		var name = $('#add_contact_modal').find('#contact_name').val();
		var number = $('#add_contact_modal').find('#contact_number').val();
        this.props.addItemAction(name, number);
		
		this._clearContactForm();
	}

	_clearContactForm() {
		$('#add_contact_modal').find('#contact_name').val('');
        $('#add_contact_modal').find('#contact_number').val('');
		$('#add_contact_modal').modal('hide');
	}
}
export default ContactModal;