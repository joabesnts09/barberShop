import { db } from '@/app/_lib/prisma'
import BarbershopInfo from './_components/barbershop-infos'
import ServiceItem from './_components/service-item'
import { Booking, Service } from '@prisma/client'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

interface IBarbershopDetailsPage {
    params: {
        id: string
    }
}

interface IBarbershop {
    id: string,
    name: string,
    address: string,
    imageUrl: string,
    services: Service[],
    bookings: Booking[],
}

const BarbershopDetailsPage = async ({ params }: IBarbershopDetailsPage) => {

    const session = await getServerSession(authOptions)

    if (!params.id) {
        // TODO: retornar para homePage

        return null
    }
    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id,
        },
        include: {
            services: true,
        }
    })

    if (!barbershop) {
        // TODO: retornar para homePage
        return null
    }
    return (
        <>
            <div>
                <BarbershopInfo barbershop={barbershop} />

                <div className='px-5 flex flex-col gap-4 py-6'>
                    {
                        barbershop.services.map((service) => (
                            <ServiceItem key={service.id} barbershop={barbershop} service={service} isAuthenticate={!!session?.user} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default BarbershopDetailsPage
