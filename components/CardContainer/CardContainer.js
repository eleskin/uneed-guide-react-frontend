import styles from './CardContainer.module.scss';

const CardContainer = ({children, padding = 24}) => {
	return (
		<div
			className={styles.CardContainer}
			style={{padding: `24px ${padding}px`}}
		>
			{children}
		</div>
	);
};

export default CardContainer;
