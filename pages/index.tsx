import { Menu, Navside } from '@/components/navside/Navside'
import Head from 'next/head'



export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Navside theme='primary' size='lg'>
                    <Menu>
                        Dashboard
                    </Menu>
                    <Menu>
                        Stock
                    </Menu>
                    <Menu>
                        Requests
                    </Menu>
                    <Menu>
                        Risk
                    </Menu>
                    <Menu>
                        Analitics
                    </Menu>
                    <Menu>
                        Regulations
                    </Menu>
                    <Menu>
                        Widgets
                    </Menu>
                </Navside>
            </main>
        </>
    )
}
