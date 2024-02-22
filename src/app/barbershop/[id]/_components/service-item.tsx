import { Card, CardContent } from '@/app/_components/ui/card'
import { Service } from '@prisma/client'
import Image from 'next/image'

interface IServiceItemProps {
    service: Service
}

const ServiceItem = ({ service }: IServiceItemProps) => {
    return (
        <>
            <Card>
                <CardContent>
                    <div>
                        <div>
                            <Image src={service.imageUrl} fill style={{objectFit: 'contain'}} alt={service.name} />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default ServiceItem
