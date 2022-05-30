import FAQ from '../../faq';
import {useRouter} from 'next/router';

const Topic = () => {
	const router = useRouter();
	
	return (
		<FAQ topic={router.query['topic']}/>
	);
};

export default Topic;