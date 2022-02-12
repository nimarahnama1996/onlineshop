import React from 'react'
import Head  from 'next/head'
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core'

export default function Layout({children}) {
  return (
    <div>
        <Head>
            <title>Online Shop</title>
        </Head>
        <AppBar position='static'>
        <Toolbar>
            <Typography>Online Shop</Typography>
        </Toolbar>
        </AppBar>

        <Container>
            {children}
        </Container>

        <footer>
            <Typography>
                All rights reserved. 
            </Typography>
        </footer>
    </div>
  )
}
