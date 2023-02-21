import  Image  from 'next/image';

import { useTheme, Text, Spacer } from "@nextui-org/react";


export const NavBar = () => {

    const { theme } = useTheme();

  return (
    <div style={{
        display: "flex",
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'start',
        padding:'0x 20px',
        backgroundColor: theme?.colors.gray600.value
    }}>

      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt='icono de la App'
        width={ 70 }
        height={ 70 }

      />  

      <Text color="white" h2>P</Text>
      <Text color="white" h3>okemon</Text>

      <Spacer css={{ flex: 1 }}></Spacer>

      <Text color="white" >Favoritos</Text>

    </div>
  )
}

