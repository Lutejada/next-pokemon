import { pokeApi } from 'api';
import { PokemonListresponse } from 'interfaces';
import { GetStaticProps } from 'next'



import { Layouts } from '../components/layouts/';


export default function HomePage(props) {

  console.log({props})
  return (
    <Layouts title= 'listado de pokemones'>
      <ul>
        <li>Pokemon</li>
        <li>Pokemon</li>
      </ul>
    </Layouts>
  )
}



export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListresponse>('/pokemon?limit=151')

  

  return {
    props: {
      pokemons: data.results
    }
  }
}