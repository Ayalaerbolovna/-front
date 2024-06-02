import './index.scss';

const Input = ({
                    type = 'text',
                    placeholder = '',
                    disabled = false,
                    icon,
                    value,
                }) => {

    return (
        <div className="field">
            <div className="input-wrapper">
                <input
                    type={type}
                    placeholder={placeholder}
                    disabled={disabled}
                    value={value}
                    onChange={prev => prev.target.value}
                    className="field__input"
                />
            </div>
        </div>
    );
};

export default Input;
