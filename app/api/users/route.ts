import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { User } from "@prisma/client";
import {addUser, getAllUsers} from "@/app/api/users/prismaService";
const prisma = new PrismaClient();

export const GET = async (request: Request) =>{
    try {
        const user = await getAllUsers();
        return NextResponse.json(user, {status: 200});
    } catch (error) {
        console.error(error);
        return NextResponse.json('Internal Server Error', {status: 500});
    }
}

export const POST = async (request: Request) => {
    try {
        const body: User = await request.json();
        const newUser = await prisma.user.create({
            data:{
                name: body.name,
                age: body.age,
                address: body.address,
                tags: body.tags,
            }
        });
        return NextResponse.json(newUser, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json('Internal Server Error', { status: 500 });
    }
};

