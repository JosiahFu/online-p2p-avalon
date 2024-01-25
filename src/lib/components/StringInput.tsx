import { Dispatch, useState } from 'react';

function StringInput({
    onSubmit,
    placeholder,
    buttonText = 'Submit',
}: {
    onSubmit: Dispatch<string>;
    placeholder?: string;
    buttonText?: string;
}) {
    const [value, setValue] = useState('');

    return (
        <div>
            <input
                value={value}
                onChange={event => setValue(event.target.value)}
                placeholder={placeholder}
            />
            <button onClick={() => onSubmit(value)}>{buttonText}</button>
        </div>
    );
}

export default StringInput;
