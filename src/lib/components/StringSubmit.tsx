import { Dispatch, useState } from 'react';
import TextInput from './TextInput';

function StringSubmit({
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
            <TextInput
                value={value}
                onChange={setValue}
                placeholder={placeholder}
            />
            <button onClick={() => onSubmit(value)}>{buttonText}</button>
        </div>
    );
}

export default StringSubmit;
