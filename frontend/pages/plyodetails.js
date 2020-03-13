import { useRouter } from 'next/router';
import PlyoDetailsView from '../components/PlyoDetailsView';
import Page from '../components/Page';

const plyodetails = () => {
    
    const router = useRouter();

    return (
        <Page>
            <PlyoDetailsView id={router.query.id}/>
        </Page>
    )
}

export default plyodetails;
