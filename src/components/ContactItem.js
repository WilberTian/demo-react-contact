import React, { Component, PropTypes } from 'react'
import contactIcon from "../images/contact.png";

class ContactItem extends Component {
    render() {
 
        return (
        <a href="#" className="list-group-item">
            <div className="pull-right">
                <span className="glyphicon glyphicon-pencil" onClick={ e => this._openEditModal(e)}></span>
                 &nbsp;&nbsp;
                <span className="glyphicon glyphicon-remove" onClick={ e => this._itemDeleteHandler(e) }></span>
            </div>
            <img id="contact-icon" className="pull-left" src={ contactIcon } alt="contact"/>
            <address>
                <strong>{this.props.name}</strong><br/>
                <abbr title="Phone">Phone:</abbr> {this.props.number}<br/>
                <abbr title="Email">Email:</abbr> first.last@example.com
            </address>
            </a>
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