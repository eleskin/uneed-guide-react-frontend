import {useEffect} from 'react';

export const useOutsideClickHandler = (ref, isActive, setIsActive) => {
	return useEffect(() => {
		const onClick = (event) => {
			if (ref) ref.current?.contains(event.target) || (isActive && setIsActive(false));
		};
		document.addEventListener('click', onClick);
		return () => document.removeEventListener('click', onClick);
	}, [ref, isActive, setIsActive]);
};
