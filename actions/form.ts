"use server";

import prisma from "@/lib/prisma";
import { formSchema, formSchemaType } from "@/schemas/form";
import { currentUser } from "@clerk/nextjs/server";
class UserNotFoundError extends Error {}
export async function GetFormStats() {
  const user = await currentUser();
  if (!user) {
    throw new UserNotFoundError();
  }
  const stats = prisma.form.aggregate({
    where: {
      userId: user.id,
    },
    _sum: {
      visits: true,
      submissions: true,
    },
  });

  const visits = stats?._sum?.visits || 0;
  const submissions = stats?._sum?.submissions || 0;
  let submissionRate = 0;
  if (visits > 0) {
    submissionRate = Math.round((submissions / visits) * 100);
  }

  const bounceRate = 100 - submissionRate;

  return { visits, submissions, submissionRate, bounceRate };
}

export async function CreateForm(data: formSchemaType) {
  const validation = formSchema.safeParse(data);
  if (!validation.success) {
    throw new Error("Invalid data");
  }
  const user = await currentUser();
  if (!user) {
    throw new UserNotFoundError();
  }
  const { name, description } = validation.data;
  const form = await prisma.form.create({
    data: {
      userId: user.id,
      name,
      description,
    },
  });
  if (!form) {
    throw new Error("Something went wrong. Please try again");
  }
  return form.id;
}
