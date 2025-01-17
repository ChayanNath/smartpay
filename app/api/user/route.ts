import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { email, password, firstName, lastName } = await request.json();
  const user = await prisma.user.create({
    data: {
      email,
      password,
      firstName,
      lastName,
    },
  });

  return new Response(JSON.stringify(user), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
