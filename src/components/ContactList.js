import React, { Component, PropTypes } from 'react';
import ContactItem from './ContactItem';

class ContactList extends Component {
    
    render() {
        return (
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Number</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {this.props.contacts.map((contact, index) =>
                <ContactItem {...contact}
                    key={index}
                    id={index}
                    onDeleteClick={ this.props.deleteItemAction }
                    onEditClick={this.props.setEditContactIdx}
                />
            )}
            </tbody>
        </table>
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