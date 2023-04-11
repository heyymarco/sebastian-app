import styles from '@/styles/Home.module.css'

import { useState } from 'react'
import Head from 'next/head'

import { Navside, Menu } from '@/components/navside'



export default function Home() {
    // states:
    const [activeMenu, setActiveMenu] = useState<string>('dashboard');
    
    
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.page}>
                <Navside theme='primary'>
                    <Menu actionCtrl={false}>
                        My Logo
                    </Menu>
                    <Menu active={activeMenu === 'dashboard'} onClick={() => setActiveMenu('dashboard')}>
                        {/* <Icon icon='dashboard' /> */}
                        Dashboard
                    </Menu>
                    <Menu active={activeMenu === 'stock'} onClick={() => setActiveMenu('stock')}>
                        {/* <Icon icon='inventory' /> */}
                        Stock
                    </Menu>
                    <Menu active={activeMenu === 'requests'} onClick={() => setActiveMenu('requests')}>
                        {/* <Icon icon='fact_check' /> */}
                        Requests
                    </Menu>
                    <Menu active={activeMenu === 'risk'} onClick={() => setActiveMenu('risk')}>
                        {/* <Icon icon='shield' /> */}
                        Risk
                    </Menu>
                    <Menu active={activeMenu === 'analitics'} onClick={() => setActiveMenu('analitics')}>
                        {/* <Icon icon='analytics' /> */}
                        Analitics
                    </Menu>
                    <Menu active={activeMenu === 'regulations'} onClick={() => setActiveMenu('regulations')}>
                        {/* <Icon icon='menu_book' /> */}
                        Regulations
                    </Menu>
                    <Menu active={activeMenu === 'widgets'} onClick={() => setActiveMenu('widgets')}>
                        {/* <Icon icon='widgets' /> */}
                        Widgets
                    </Menu>
                </Navside>
                
                
                {/* <Group className={styles.theThemes}>
                    <Label>
                        Theme:
                    </Label>
                    {['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'].map((themeOpt) =>
                        <Radio key={themeOpt} name='theme' theme={themeOpt} active={theme === themeOpt} onClick={() => setTheme(themeOpt)} nude={false} />
                    )}
                </Group> */}
                
                
                {/* <Group className={styles.theCorners} theme='primary'>
                    <Label>
                        Corners:
                    </Label>
                    <Range min={0} max={1.5} step={0.1} defaultValue={1.25} onChange={({target: {valueAsNumber}}) => { borderRadiusValues.md = `${valueAsNumber}rem` }} nude={false} />
                </Group> */}
                
                
                {/* <Group className={styles.theStrokes} theme='primary'>
                    <Label>
                        Strokes:
                    </Label>
                    <Range min={0} max={4} step={1} defaultValue={2} onChange={({target: {valueAsNumber}}) => { borderValues.defaultWidth = `${valueAsNumber}px` }} nude={false} />
                </Group> */}
            </main>
        </>
    )
}
