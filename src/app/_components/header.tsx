import Image from 'next/image'
import { Card, CardContent, } from './ui/card'
import { Button } from './ui/button'
import { MenuIcon } from 'lucide-react'
import imgLogo from '../../../public/Logo.png'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import SideMenu from './sideMenu'


const Header = () => {

    return (
        <>
            <Card>
                <CardContent className='p-5 flex flex-row justify-between items-center'>
                    <Image
                        src={imgLogo}
                        alt='FSW Baber'
                        height={22}
                        width={120}
                    />

                    <Sheet>

                        <SheetTrigger asChild>
                            <Button variant='outline' size='icon' >
                                <MenuIcon size={18} />
                            </Button>
                        </SheetTrigger>

                        <SheetContent className='p-0'>
                            <SideMenu />
                        </SheetContent>

                    </Sheet>
                </CardContent>
            </Card>
        </>
    )
}

export default Header
