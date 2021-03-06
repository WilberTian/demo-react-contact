import React, { Component, PropTypes } from 'react';
import ContactItem from './ContactItem';

class ContactList extends Component {
    
    render() {
        return (
        <div className="list-group">
            {this.props.contacts.map((contact, index) =>
                <ContactItem {...contact}
                    key={index}
                    id={index}
                    onDeleteClick={ this.props.deleteItemAction }
                    onEditClick={this.props.setEditContactIdx}
                />
            )}
        </div>
        
        )
    }
    
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    }).isRequired).isRequired
};

export default ContactList;