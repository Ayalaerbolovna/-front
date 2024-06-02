import './index.scss';

const Button = ({
                     type = 'primary',
                     size = 'sm',
                     withIcon = false,
                     wide = false,
                     fullWidth = false,
                     children,
                 }) => {
    const buttonClassNames = [
        'a-button',
        `a-button--${type}`,
        `a-button--${size}`,
        withIcon ? 'a-button--with-icon' : '',
        wide ? 'a-button--wide' : '',
        fullWidth ? 'a-button--fullwidth' : '',
    ].join(' ');

    return <button className={buttonClassNames}>{children || 'Добавить'}</button>;
};

export default Button;
