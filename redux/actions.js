/*
 * actions
 */

export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';

/*
 * actions creators
 */
export function addItem(name, number) {
    return {
        type: ADD_ITEM,
        name,
        number
    };
}

export function deleteItem(index) {
    return {
        type: DELETE_ITEM,
        index
    };
}

export function editItem(index, name, number) {
    return {
        type: EDIT_ITEM,
        index,
        name, 
        number
    };
}