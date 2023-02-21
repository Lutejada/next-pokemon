import { useTheme } from "@nextui-org/react";
import Head from "next/head";
import { FC } from "react";
import { NavBar } from '../ui';

interface props {
  title?: string,
}

export const Layouts: FC<props> = ({ children, title }) => {

  

  return (
    <>
      <Head>
        <title> {title || 'Pokemon App'}</title>
        <meta name="author" content="Luis Tejada"/>
        <meta name="description" content={ `esto es ${ title }` }/>
        <meta name="keyworks" content={`esto es ${ title },pokemon,pokedex`}/>
      </Head>

      <NavBar />

      <main style={{
        padding:'0px 20px',
      }}>
        {children}
      </main>

    </>
  )
}




