export function validateTextFieldCreator(maxLength) {
    return (value) => {
        let error;
        if (!value || value === '' || value.length === 0) {
          error = 'This field cannot be empty.';
        } else if (maxLength && value.length > maxLength) {
            error = `It's too much symbols. Max length is ${maxLength}`;
        }
        return error;
    }
}