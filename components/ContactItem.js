import React, { Component, PropTypes } from 'react'

class ContactItem extends Component {
    render() {
        return (
        <tr>
            <td>{this.props.name}</td>
            <td>{this.props.number}</td>
            <td>
            <button className="btn btn-default" onClick={ e => this._openEditModal(e)}><span className="glyphicon glyphicon-edit"></span></button>
            <button className="btn btn-default" onClick={ e => this._itemDeleteHandler(e) }><span className="glyphicon glyphicon-remove"></span></button>
            </td>
        </tr>
        );
    }
  
    _itemDeleteHandler(e) {
        e.preventDefault();
        this.props.onDeleteClick(this.props.id);
    }
    
    _openEditModal(e) {
        e.preventDefault();
        
        this.props.onEditClick(this.props.id);
        
		$('#edit_contact_modal').modal('show');
        
        var name = this.props.name;
        var number = this.props.number;
        
        $('#edit_contact_modal').on('shown.bs.modal', function () {
            $('#edit_contact_modal').find('#contact_name').val(name);
            $('#edit_contact_modal').find('#contact_number').val(number);
            $('#edit_contact_modal').find('#contact_name').focus()
        });
		
	}
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
};

export default ContactItem