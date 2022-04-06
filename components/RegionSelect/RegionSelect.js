import Image from 'next/image';
import {useState} from 'react';
import Button from '../Button/Button';
import styles from './RegionSelect.module.scss'

const RegionSelect = ({mode = 'header'}) => {
	const [isVisibleRegionSelector, setIsVisibleRegionSelector] = useState(true);
	
	const handleButtonCloseClick = () => {
		setIsVisibleRegionSelector(false);
	};
	
	const handleButtonOpenClick = () => {
		setIsVisibleRegionSelector(true);
	};
	
	return (
		<div className={`${styles.RegionSelect} ${mode === 'first-screen' ? styles.RegionSelect__firstScreen : ''}`}>
			<div onClick={handleButtonOpenClick}>
				<Image
					src="/assets/images/first-screen/first-screen-map-pin.svg"
					width={15}
					height={15}
					alt=""
				/>
				<span>г. Москва</span>
				<i>(Ваш регион)</i>
			</div>
			<div
				className={`${styles.RegionSelect__region} ${isVisibleRegionSelector ? styles.RegionSelect__region_active : ''}`}
			>
				<header>
					<Image
						src="/assets/images/first-screen/first-screen-map-pin.svg"
						width={15}
						height={15}
						alt=""
					/>
					<span>Ваш регион Москва?</span>
				</header>
				<footer>
					<Button.Primary small={true} onClick={handleButtonCloseClick}>Да, верно</Button.Primary>
					<Button.Outlined small={true} onClick={handleButtonCloseClick}>Нет, другой</Button.Outlined>
				</footer>
			</div>
		</div>
	);
};

export default RegionSelect;
