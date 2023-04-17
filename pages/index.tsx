// import Image from 'next/image'
import Nav from '@/components/Nav'
import Search from '@/components/Search'
import  {APIResponse}  from '@/types/Response'
import List from '@/components/List'




const Home:React.FC<APIResponse> =  ({games}) => {
  return (
    <>
      <Nav />
      <Search />
      <List games={games} />
    </>
  )
}
export default Home

export async function getStaticProps() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_KEY?process.env.NEXT_PUBLIC_RAPID_KEY:"",
      'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com'
    }
  };
  const res = await fetch('https://opencritic-api.p.rapidapi.com/game/popular',options)
  const data = await res.json()

  return {
    props: {
      games: data
    }
  }
}
