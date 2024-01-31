import Image from 'next/image'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { MenuIcon } from 'lucide-react'
import imgLogo from "../../../public/Logo.png"

const Header = () => {
    return (
        <>
            <Card>
                <CardContent className='p-5 flex flex-row justify-between items-center'>
                    <Image
                        src={imgLogo}
                        alt="FSW Baber"
                        height={22}
                        width={120}
                    />
                    <Button variant="outline" size="icon" className="h-8 w-8">
                        <MenuIcon size={18}/>
                    </Button>
                </CardContent>
            </Card>
        </>
    )
}

export default Header
