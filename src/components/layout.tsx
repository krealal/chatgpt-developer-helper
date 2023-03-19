import { ReactNode } from 'react'
import Head from 'next/head'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>chat gpt developer helper</title>
      </Head>
      {children}
    </>
  )
}
