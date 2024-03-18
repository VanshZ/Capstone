import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

    try {
        const { userId } = auth();
        const body = await req.json();
        const { zpid, address, isFavorite, listingStatus, livingArea, price, propertyType } = body;
        let property;

        if (!userId) {
            return new NextResponse('Unauthenticated', { status: 401 });
        }

        const propByUserId = await prismadb.likedProperty.findFirst({
            where: {
                zpid: zpid,
                userId
            }
        });

        if (!isFavorite) {
            property = await prismadb.likedProperty.deleteMany({
                where: {
                    zpid: zpid,
                    userId
                }
            });
        }
        else {
            property = await prismadb.likedProperty.create({
                data: {
                    zpid,
                    userId,
                    address,
                    listingStatus,
                    livingArea,
                    price,
                    propertyType
                }
            });
        }

        return NextResponse.json(property);

    } catch (error) {
        console.log('[_POST]', error);
        return new NextResponse('Internal Error', { status: 500 });
    }

}

export async function GET(req: Request) {

    try {

        const { userId } = auth();

        if (!userId) {
            return new NextResponse('Unauthenticated', { status: 401 });
        }

        const properties = await prismadb.likedProperty.findMany({
            where: {
                userId
            }
        });

        return NextResponse.json(properties);

    } catch (error) {
        console.log('[_GET]', error);
        return new NextResponse('Internal Error', { status: 500 });
    }

}