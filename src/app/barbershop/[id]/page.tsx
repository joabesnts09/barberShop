import { db } from '@/app/_lib/prisma'
import BarbershopInfo from './_components/barbershop-infos'
import ServiceItem from './_components/service-item'

interface IBarbershopDetailsPage {
    params: {
        id: string
    }
}

const BarbershopDetailsPage = async ({ params }: IBarbershopDetailsPage) => {
    if (!params.id) {
        // TODO: retornar para homePage

        return null
    }
    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id,
        },
        include: {
            Services: true
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
                {
                    barbershop.Services.map((service) => (
                        <ServiceItem key={service.id} service={service}/>
                    ))
                }
            </div>
        </>
    )
}

export default BarbershopDetailsPage
