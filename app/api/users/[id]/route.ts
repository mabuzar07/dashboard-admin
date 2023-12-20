import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { User } from "@prisma/client";
import { addUser, getAllUsers } from "@/app/api/users/prismaService";
const prisma = new PrismaClient();
// @ts-ignore
export const DELETE = async (request: Request, { params }) => {
  try {
    const userId = params.id;
    const deletedUser = await prisma.user.delete({
      where: {
        id: parseInt(userId),
      },
    });
    return NextResponse.json(deletedUser, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
};

// @ts-ignore
export const PATCH = async (request: Request, { params }) => {
  try {
    const userId = params.id;
    const { name, age, address, tags } = await request.json();

    const updatedUser = await prisma.user.update({
      where: {
        id: parseInt(userId),
      },
      data: {
        name,
        age,
        address,
        tags,
      },
    });

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json("Internal Server Error", { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
