import bcrypt from "bcryptjs";
import { prisma } from "../../lib/prisma.js";
import { signToken } from "../../lib/jwt.js";
import { ApiError } from "../../shared/ApiError.js";
import type { loginSchema, registerSchema } from "./auth.schema.js";
import type { z } from "zod";

type RegisterInput = z.infer<typeof registerSchema>;
type LoginInput = z.infer<typeof loginSchema>;

const toPublicUser = (user: { id: string; email: string; name: string | null }) => ({
  id: user.id,
  email: user.email,
  name: user.name,
});

export const register = async (input: RegisterInput) => {
  const existingCount = await prisma.adminUser.count();
  if (existingCount > 0) {
    throw new ApiError(403, "Registration is closed. An admin account already exists.", "REGISTRATION_CLOSED");
  }

  const passwordHash = await bcrypt.hash(input.password, 12);
  const user = await prisma.adminUser.create({
    data: {
      email: input.email,
      passwordHash,
      name: input.name,
    },
    select: { id: true, email: true, name: true },
  });

  const token = signToken({ sub: user.id, email: user.email });
  return { token, user: toPublicUser(user) };
};

export const login = async (input: LoginInput) => {
  const user = await prisma.adminUser.findUnique({ where: { email: input.email } });
  if (!user) {
    throw new ApiError(401, "Invalid email or password", "INVALID_CREDENTIALS");
  }

  const valid = await bcrypt.compare(input.password, user.passwordHash);
  if (!valid) {
    throw new ApiError(401, "Invalid email or password", "INVALID_CREDENTIALS");
  }

  const token = signToken({ sub: user.id, email: user.email });
  return {
    token,
    user: toPublicUser({ id: user.id, email: user.email, name: user.name }),
  };
};

export const getMe = async (userId: string) => {
  const user = await prisma.adminUser.findUnique({
    where: { id: userId },
    select: { id: true, email: true, name: true },
  });

  if (!user) {
    throw new ApiError(404, "User not found", "NOT_FOUND");
  }

  return toPublicUser(user);
};
