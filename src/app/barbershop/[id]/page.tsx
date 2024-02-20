import { db } from '@/app/_lib/prisma'
import BarbershopInfo from './_components/barbershop-infos'

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
    })

    if (!barbershop) {
        // TODO: retornar para homePage
        return null
    }
    return (
        <>
            <BarbershopInfo barbershop={barbershop}/>
        </>
    )
}

export default BarbershopDetailsPage
