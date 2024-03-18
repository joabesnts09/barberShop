'use server'
import { db } from '../../../_lib/prisma';

interface ISaveBookingParams {
    barbershopId: string
    serviceId : string
    userId: string
    date: Date
}

export const saveBookings = async (params: ISaveBookingParams) => {
    await db.booking.create({
        data: {
            barbershopId: params.barbershopId,
            serviceId: params.serviceId,
            userId: params.userId,
            date: params.date
        }
    })
}