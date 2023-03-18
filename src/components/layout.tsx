import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>chat gpt developer helper</title>
      </Head>
      {children}
    </>
  )
}
