'use client'
import { Badge } from '@/app/_components/ui/badge'
import { Button } from '@/app/_components/ui/button'
import { Card, CardContent } from '@/app/_components/ui/card'
import { Barbershop } from '@prisma/client'
import { StarIcon } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface IBarberShopItemProps {
    barbershop: Barbershop
}

const BarberShopItem = ({ barbershop }: IBarberShopItemProps) => {
    const router = useRouter()
    const handleBookingClick = () => {
        router.push(`/barbershop/${barbershop.id}`)
    }
    return (
        <>
            <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
                <CardContent className="px-0 py-0 ">
                    <div className="flex flex-col gap-2 py-5 pl-5 flex-[3] h-[159px] w-full relative">
                        <div className="absolute top-2 left-2 z-50">
                            <Badge
                                variant="secondary"
                                className="flex gap-1 items-center opacity-90">
                                <StarIcon
                                    className="fill-primary text-primary"
                                    size={12}
                                />
                                <span className="text-xs">5,0</span>
                            </Badge>
                        </div>

                        <Image
                            src={barbershop.imageUrl}
                            alt={barbershop.name}
                            fill
                            sizes='profile'
                            style={{
                                objectFit: 'cover',
                            }}
                            className="rounded-2xl"
                        />
                    </div>

                    <div className="px-2 pb-3">
                        <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">
                            {barbershop.name}
                        </h2>

                        <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">
                            {barbershop.address}
                        </p>

                        <Button
                            onClick={handleBookingClick}
                            variant="secondary"
                            className="w-full mt-3">
                            Resevar
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default BarberShopItem
