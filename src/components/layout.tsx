import Head from 'next/head'

export function Layout({ children }) {
  return (
    <>
      <Head>
        <title>chat gpt developer helper</title>
      </Head>
      {children}
    </>
  )
}
