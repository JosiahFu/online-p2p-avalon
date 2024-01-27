import { InputHTMLAttributes } from 'react';

function TextInput({
    value,
    onChange,
    ...otherProps
}: {
    value?: string;
    onChange?: (value: string) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>) {
    return (
        <input
            value={value}
            onChange={
                onChange ? event => onChange(event.target.value) : undefined
            }
            {...otherProps}
        />
    );
}

export default TextInput;
