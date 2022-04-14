import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import Container from '../Container/Container';
import Title from '../Title/Title';
import styles from './Advantages.module.scss';
import Image from 'next/image';

const Advantages = () => {
	const router = useRouter();
	const [languageFile, setLanguageFile] = useState();
	
	useEffect(() => {
		if (router.locale) {
			import(`../../languages/${router.locale}.json`).then((language) => setLanguageFile(language.default));
		}
	}, [setLanguageFile, router.locale]);
	
	return (
		<div className={styles.Advantages}>
			<Container>
				<Title>{languageFile?.['advantages']?.['title']}</Title>
				<div className={styles.Advantages__container}>
					<ul className={styles.Advantages__list}>
						<li>
							<i>
								<svg width="28" height="20" viewBox="0 0 29 21" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M18 20C23.5228 20 28 15.7467 28 10.5C28 5.25329 23.5228 1 18 1C12.4772 1 8 5.25329 8 10.5C8 15.7467 12.4772 20 18 20Z" stroke="#283140" strokeLinecap="round" strokeLinejoin="round"/>
									<path d="M18 5V11L22 13" stroke="#283140" strokeLinecap="round" strokeLinejoin="round"/>
									<rect x="2" y="10" width="4" height="1" fill="#283140"/>
									<rect y="15" width="6" height="1" fill="#283140"/>
								</svg>
							</i>
							<span>{languageFile?.['advantages']?.['list']?.['first']}</span>
						</li>
						<li>
							<i>
								<svg width="28" height="28" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M19.1416 9.80736C19.1416 4.93389 15.1908 0.983154 10.3174 0.983154C5.4439 0.983154 1.49316 4.93389 1.49316 9.80736C1.49316 14.6808 5.4439 18.6316 10.3174 18.6316" stroke="#283140" strokeLinecap="round" strokeLinejoin="round"/>
									<path d="M7.74579 9.50967C7.34579 9.50967 6.98179 9.42567 6.65379 9.25767C6.33379 9.08967 6.07779 8.86167 5.88579 8.57367C5.70179 8.28567 5.60979 7.96567 5.60979 7.61367C5.60979 7.26167 5.70179 6.94167 5.88579 6.65367C6.07779 6.36567 6.33379 6.13767 6.65379 5.96967C6.98179 5.80167 7.34579 5.71767 7.74579 5.71767C8.14579 5.71767 8.50579 5.80167 8.82579 5.96967C9.15379 6.13767 9.40979 6.36567 9.59379 6.65367C9.78579 6.94167 9.88179 7.26167 9.88179 7.61367C9.88179 7.96567 9.78579 8.28567 9.59379 8.57367C9.40979 8.86167 9.15379 9.08967 8.82579 9.25767C8.50579 9.42567 8.14579 9.50967 7.74579 9.50967ZM7.74579 8.42967C7.84979 8.42967 7.94579 8.39367 8.03379 8.32167C8.12179 8.24167 8.18979 8.14167 8.23779 8.02167C8.29379 7.89367 8.32179 7.75767 8.32179 7.61367C8.32179 7.46167 8.29379 7.32567 8.23779 7.20567C8.18979 7.08567 8.12179 6.98967 8.03379 6.91767C7.94579 6.83767 7.84979 6.79767 7.74579 6.79767C7.64179 6.79767 7.54579 6.83767 7.45779 6.91767C7.36979 6.98967 7.29779 7.08567 7.24179 7.20567C7.19379 7.32567 7.16979 7.46167 7.16979 7.61367C7.16979 7.75767 7.19379 7.89367 7.24179 8.02167C7.29779 8.14167 7.36979 8.24167 7.45779 8.32167C7.54579 8.39367 7.64179 8.42967 7.74579 8.42967ZM12.8938 14.4777C12.4938 14.4777 12.1298 14.3937 11.8018 14.2257C11.4818 14.0577 11.2258 13.8297 11.0338 13.5417C10.8498 13.2537 10.7578 12.9337 10.7578 12.5817C10.7578 12.2297 10.8498 11.9097 11.0338 11.6217C11.2258 11.3337 11.4818 11.1057 11.8018 10.9377C12.1298 10.7697 12.4938 10.6857 12.8938 10.6857C13.2938 10.6857 13.6538 10.7697 13.9738 10.9377C14.3018 11.1057 14.5578 11.3337 14.7418 11.6217C14.9338 11.9097 15.0298 12.2297 15.0298 12.5817C15.0298 12.9337 14.9338 13.2537 14.7418 13.5417C14.5578 13.8297 14.3018 14.0577 13.9738 14.2257C13.6538 14.3937 13.2938 14.4777 12.8938 14.4777ZM12.8938 13.3977C12.9978 13.3977 13.0938 13.3617 13.1818 13.2897C13.2698 13.2097 13.3378 13.1097 13.3858 12.9897C13.4418 12.8617 13.4698 12.7257 13.4698 12.5817C13.4698 12.4297 13.4418 12.2937 13.3858 12.1737C13.3378 12.0537 13.2698 11.9577 13.1818 11.8857C13.0938 11.8057 12.9978 11.7657 12.8938 11.7657C12.7898 11.7657 12.6938 11.8057 12.6058 11.8857C12.5178 11.9577 12.4458 12.0537 12.3898 12.1737C12.3418 12.2937 12.3178 12.4297 12.3178 12.5817C12.3178 12.7257 12.3418 12.8617 12.3898 12.9897C12.4458 13.1097 12.5178 13.2097 12.6058 13.2897C12.6938 13.3617 12.7898 13.3977 12.8938 13.3977ZM6.61779 13.5777L10.0138 9.74967L13.0258 5.70567L14.0218 6.60567L10.7698 10.3137L7.61379 14.4777L6.61779 13.5777Z" fill="#283140"/>
									<path d="M29.226 20.4612V21.157C29.2251 22.7881 28.6969 24.3751 27.7204 25.6815C26.7438 26.9878 25.3711 27.9435 23.807 28.4059C22.2429 28.8684 20.5712 28.8128 19.0412 28.2476C17.5113 27.6824 16.205 26.6377 15.3173 25.2694C14.4295 23.9011 14.0079 22.2826 14.1152 20.6551C14.2225 19.0276 14.8531 17.4784 15.9128 16.2385C16.9725 14.9986 18.4046 14.1345 19.9955 13.7751C21.5865 13.4156 23.251 13.5801 24.7408 14.2439" stroke="#283140" strokeLinecap="round" strokeLinejoin="round"/>
									<path d="M29.2262 15.1018L21.0808 22.6654L18.6372 20.3986" stroke="#283140" strokeLinecap="round" strokeLinejoin="round"/>
								</svg>
							</i>
							<span>{languageFile?.['advantages']?.['list']?.['second']}</span>
						</li>
						<li>
							<i>
								<svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M12.8802 20.5228L8.2393 24.5594C7.59209 25.1223 6.58302 24.6626 6.58302 23.8049V20.5228H5.30107C2.92565 20.5228 1 18.5972 1 16.2218V16.2218V5.33468V5.18727C1 2.8747 2.8747 1 5.18727 1V1H22.5531H22.6653C25.0593 1 27 2.9407 27 5.33468V5.33468V16.8938V16.8938C27 18.8981 25.3752 20.5228 23.371 20.5228H22.5531H15.8989" stroke="#283140"/>
								</svg>
							</i>
							<span>{languageFile?.['advantages']?.['list']?.['third']}</span>
						</li>
					</ul>
					<div className={styles.Advantages__promo}>
						<p>{languageFile?.['advantages']?.['card']}</p>
						<div className={styles.Advantages__image}>
							<Image
								src="/assets/images/advantages/advantages-promo.png"
								width={320}
								height={320}
								layout="responsive"
								alt=""
							/>
						</div>
						<div className={styles.Advantages__image_desktop}>
							<Image
								src="/assets/images/advantages/advantages-promo-desktop.png"
								width={620}
								height={400}
								layout="responsive"
								alt=""
							/>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Advantages;
