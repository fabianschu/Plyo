import { useRouter } from 'next/router';
import PlyoDetailsView from '../components/PlyoDetailsView';

const plyodetails = () => {
    
    const router = useRouter();

    return (
        <PlyoDetailsView id={router.query.id}/>
    )
}

export default plyodetails;
