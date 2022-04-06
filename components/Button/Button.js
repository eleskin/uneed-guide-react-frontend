import styles from './Button.module.scss';

const ButtonPrimary = ({children, small = false, ...props}) => {
	return (
		<button
			{...props}
			className={`${styles.Button_primary} ${small ? styles.Button_small : styles.Button}`}
		>
			{children}
		</button>
	);
};

const ButtonOutlined = ({children, small = false, ...props}) => {
	return (
		<button
			{...props}
			className={`${styles.Button_outlined} ${small ? styles.Button_small : styles.Button}`}
		>
			{children}
		</button>
	);
};

const ButtonSecondary = ({children, small = false, ...props}) => {
	return (
		<button
			{...props}
			className={`${styles.Button_secondary} ${small ? styles.Button_small : styles.Button}`}
		>
			{children}
		</button>
	);
};

const Button = {
	Primary: ButtonPrimary,
	Outlined: ButtonOutlined,
	Secondary: ButtonSecondary,
};

export default Button;
