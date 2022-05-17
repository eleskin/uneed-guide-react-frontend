import styles from './Alert.module.scss';

const Alert = ({title, text}) => {
	return (
		<div className={styles.Alert}>
			<i>
				<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="9" cy="9" r="9" fill="white"/>
				<circle cx="8.99995" cy="5.14283" r="1.28571" fill="#E4C316"/>
				<path d="M7.71425 7.71429H10.2857V15.4286H7.71425V10.2857L5.14282 7.71429H7.71425Z" fill="#E4C316"/>
			</svg>
			</i>
			<div className={styles.Alert__content}>
				<h5>{title}</h5>
				<p>{text}</p>
			</div>
			<button>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="12" cy="12" r="12" fill="white" fillOpacity="0.75"/>
					<rect x="7.39093" y="9.06683" width="2.37037" height="10.6667" rx="1.18519" transform="rotate(-45 7.39093 9.06683)" fill="#E4C830"/>
					<rect x="14.9334" y="7.39069" width="2.37037" height="10.6667" rx="1.18519" transform="rotate(45 14.9334 7.39069)" fill="#E4C830"/>
				</svg>
			</button>
		</div>
	);
};

export default Alert;
