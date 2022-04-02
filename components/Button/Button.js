import styles from './Button.module.scss';

const ButtonPrimary = ({children, ...props}) => {
	return (
		<button {...props} className={styles.Button_primary}>{children}</button>
	);
};

const ButtonSecondary = ({children, ...props}) => {
	return (
		<button {...props} className={styles.Button_secondary}>{children}</button>
	);
};

const Button = {
	Primary: ButtonPrimary,
	Secondary: ButtonSecondary,
};

export default Button;
