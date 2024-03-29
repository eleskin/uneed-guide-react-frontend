import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Authorization from '../components/Authorization/Authorization';
import UserProfile from '../components/UserProfile/UserProfile';
import {setIsActiveAuthorizationModal} from '../store/slices';

const Profile = () => {
	const dispatch = useDispatch();
	const isAuth = useSelector((state) => state['userSlice']['isAuth']);
	
	useEffect(() => {
		!isAuth && dispatch(setIsActiveAuthorizationModal(true));
		
		return () => dispatch(setIsActiveAuthorizationModal(false));
	}, [isAuth, dispatch]);
	
	return (
		<div>
			{isAuth ? (
				<UserProfile/>
			) : (
				<Authorization/>
			)}
		</div>
	);
};

export default Profile;
