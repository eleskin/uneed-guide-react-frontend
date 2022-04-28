import styles from './CardContainer.module.scss';

const CardContainer = ({children, theme = 'light', padding = 24}) => {
	return (
		<div
			className={styles.CardContainer}
			style={{
				padding: `24px ${padding}px`,
				backgroundColor: theme === 'dark' ? '#212632' : ''
		}}
		>
			{children}
		</div>
	);
};

export default CardContainer;
