// prismaService.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getAllUsers() {
    // @ts-ignore
    return prisma.user.findMany();
}

export async function addUser(user: { name: string; age: number; address: string; tags: string }) {
    // @ts-ignore
    return prisma.user.create({
        data: user,
    });
}
