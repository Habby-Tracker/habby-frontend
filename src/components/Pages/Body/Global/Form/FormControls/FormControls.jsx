function FormControl({ label, children }) {
    return (
        <label>
            <Label text={label} />
            {children}
        </label>
    );
}

function Label({ text }) {
    return <span className="label-text">{text}</span>;
}

export function InputControl({ label, value, ...rest }) {
    return (
        <FormControl label={label}>
            <input defaultValue={value || ''} {...rest} />
        </FormControl>
    );
}

export function SelectControl({ label, children, value, ...rest }) {
    return (
        <FormControl label={label}>
            <select defaultValue={value || ''} {...rest}>
                {children}
            </select>
        </FormControl>
    );
}
