import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export default function Layout({title, children}) {
  return (
    <>
    <Head>
        <title>{title ? title + '-ServeIT': 'ServeIT'}</title>
        <link rel='icon' href='/favicon.ico' />
    </Head>
    <div className='flex min-h-screen flex-col justify-between'>
        <header>
            <nav className='flex h-12 justify-between shadow-md items-center px-4 text-white bg-gradient-to-tr from-nav-start via-nav-middle  to-nav-end'>
                <Link href='/'>
                    <h1 className='text-lg font-bold'>ServeIT</h1>
                </Link>
                <div>
                    <Link href='/carrito'><span className='p-2'>Carrito</span></Link>
                    <Link href='/login'><span className='p-2'>Iniciar sesión</span></Link>
                </div>
            </nav>
        </header>
        <main className='container m-auto mt-4 px-4'>
            {children}
        </main>
        <footer className='flex h-40 justify-center items-center shadow-inner text-white bg-gradient-to-br from-nav-start to-nav-middle'>
            footer
        </footer>
        <footer className='flex h-10 justify-center items-center shadow-inner text-white bg-gradient-to-br from-nav-start to-nav-middle'>
                <p>©Copyright 2023 ServeIT</p>
        </footer>
    </div>
    </>
  )
}
