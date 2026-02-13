import styles from './Button.module.css';

const Button = ({
  variant = 'primary',
  size = 'md',
  rounded = false,
  children,
  className,
  href,
  ...props
}) => {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    rounded ? styles.rounded : null,
    className || null,
  ].filter(Boolean).join(' ');

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
