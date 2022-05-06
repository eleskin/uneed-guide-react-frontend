import styles from './CardContainer.module.scss';

const CardContainer = ({children, theme = 'light', padding = 24}) => {
	return (
		<div
			className={styles.CardContainer}
			style={{
				padding: padding ? `24px ${padding}px` : '24px',
				backgroundColor: theme === 'dark' ? '#212632' : '#ffffff',
			}}
		>
			{children}
		</div>
	);
};

export default CardContainer;
