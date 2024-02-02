import Image from 'next/image'
import { main } from 'ts-node/dist/bin'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Header from '../_components/Header'
import Search from './_components/Search'
import BookingItem from '../_components/BookingItem'
import { db } from '../_lib/prisma'
import BarberShopItem from './_components/BarberShopItem'


export default async function Home() {
    
    const barberShop = await db.barbershop.findMany({})

    return (
        <div>
            <Header />

            <div className='px-5 pt-5'>
                <h2 className="text-xl font-bold">Olá, Joabe.</h2>
                <p className="capitalize text-sm">
                    {format(new Date(), "EEEE',' dd ' de ' MMMM", {
                        locale: ptBR,
                    })}
                </p>
            </div>

            <div className="px-5 mt-6">
                <Search/>
            </div>

            <div className="px-5 mt-6">

                <h2 className='text-xs uppercase text-gray-400 font-bold mb-3'>Agendamentos</h2>
                <BookingItem/>
                
            </div>

            <div className='mt-6'>
                <h2 className='px-5 text-xs uppercase text-gray-400 font-bold mb-3'>Recomendados</h2>


                <div className='flex px-5 gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden'>
                    {barberShop.map((barbershop) => (
                       <BarberShopItem key={barbershop.id}  barbershop={barbershop}/>
                    ))}
                </div>
            </div>


            <div className='mt-6 mb-[4.5rem]'>
                <h2 className='px-5 text-xs uppercase text-gray-400 font-bold mb-3'>Populares</h2>


                <div className='flex px-5 gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden'>
                    {barberShop.map((barbershop) => (
                       <BarberShopItem key={barbershop.id}  barbershop={barbershop}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
