import { pokeApi } from '../../api';
import { PokemonListresponse} from 'interfaces';
import { GetStaticProps, NextPage } from 'next'

import { Layouts } from '../components/layouts/';
import { SmallPokemon } from '../../interfaces';

interface props {
  pokemons: SmallPokemon[];
}


 const HomePage: NextPage<props> = ({pokemons}) => {

  console.log(pokemons)

  

  return (
    <Layouts title = 'listado de pokemones'>
      <ul>
        {
          pokemons.map( ( { id, name} ))=>(
            <li key = {id}>
               #{id} - {name} 
            </li>
          )
        }
      </ul>
    </Layouts>
  )
}

export default HomePage;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListresponse>('/pokemon?limit=151')

  const pokemons: SmallPokemon[]= data.results.map( (poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`

  }))

  return {
    props: {
      pokemons: data.results
    }
  }
}