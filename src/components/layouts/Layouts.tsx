import Head from "next/head";



export const Layouts  = ({ children }) => {
  return (
    <>
      <Head>
        <title>Pokemon App</title>
        <meta name="author" content="Luis Tejada"/>
        <meta name="description" content="informacion sobre el pokemon"/>
        <meta name="keyworks" content="xxx, pokemon, pokedex"/>
      </Head>

      <main>
        {children}
      </main>

    </>
  )
}




