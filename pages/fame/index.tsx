import Head from 'next/head';
import Nav from '@/components/Nav';
import List from '@/components/List';
import {APIResponse} from '@/types/Response';

const Fame: React.FC<APIResponse> = ({games}) => {
    return (
        <>
        <Head>
            <title>Gamecyclopedia | Hall Of Fame</title>
        </Head>
      <Nav />
      <List games={games} />
        </>
    );
    };

export default Fame;

export async function getStaticProps() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_KEY?process.env.NEXT_PUBLIC_RAPID_KEY:"",
            'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com'
        }
    };
    const res = await fetch('https://opencritic-api.p.rapidapi.com/game/hall-of-fame',options);
    const data = await res.json();

    return {
        props: {
            games: data
        }
    };
}