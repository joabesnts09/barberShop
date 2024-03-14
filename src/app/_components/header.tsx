'use client'

import Image from 'next/image'
import { Card, CardContent, } from './ui/card'
import { Button } from './ui/button'
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon, MenuIcon, UserIcon } from 'lucide-react'
import imgLogo from '../../../public/Logo.png'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Avatar, AvatarImage } from './ui/avatar'
import Link from 'next/link'

const Header = () => {
    const { data, status } = useSession()


    const handleLogin = () => signIn('google')

    const handleLogout = () => signOut()


    return (
        <>
            <Card>
                <CardContent className='p-5 flex flex-row justify-between items-center'>
                    <Image
                        src={imgLogo}
                        alt='FSW Baber'
                        height={22}
                        width={120}
                    // className='w-auto h-auto'
                    />

                    <Sheet>

                        <SheetTrigger asChild>
                            <Button variant='outline' size='icon' >
                                <MenuIcon size={18} />
                            </Button>
                        </SheetTrigger>

                        <SheetContent className='p-0'>
                            <SheetHeader className='text-left border-b borde-solid border-secondary p-5'>
                                <SheetTitle>Menu</SheetTitle>
                            </SheetHeader>

                            {data?.user ? (
                                <div className='flex justify-between px-6 py-6 items-center'>
                                    <div className='flex items-center gap-3'>
                                        <Avatar>
                                            <AvatarImage src={data.user.image ?? ''} />
                                        </Avatar>

                                        <h2 className='font-bold'>{data.user.name}</h2>
                                    </div>

                                    <Button onClick={handleLogout} variant='secondary' size='icon'>
                                        <LogOutIcon />
                                    </Button>
                                </div>
                            ) : (
                                <div className='flex flex-col px-5 py-6 gap-3'>
                                    <div className='flex items-center gap-2'>
                                        <UserIcon size={32} />
                                        <h2 className='font-bold'>Olá, faça o seu login!</h2>
                                    </div>

                                    <Button onClick={handleLogin} variant='secondary' className='w-full justify-start'>
                                        <LogInIcon className='mr-2' size={18} />
                                        Fazer login
                                    </Button>
                                </div>
                            )}

                            <div className='flex flex-col gap-3 px-5'>
                                <Button variant='outline' className='justify-start' asChild>
                                    <Link href='/'>
                                        <HomeIcon size={18} className='mr-2' />
                                        Início
                                    </Link>
                                </Button>

                                {data?.user && (

                                    <Button variant='outline' className='justify-start' asChild>
                                        <Link href='/bookings'>
                                            <CalendarIcon size={18} className='mr-2' />
                                            Agendamentos
                                        </Link>
                                    </Button>
                                )}
                            </div>
                        </SheetContent>

                    </Sheet>
                </CardContent>
            </Card>
        </>
    )
}

export default Header
