/* eslint-disable @typescript-eslint/no-explicit-any */
// Prisma client wrapper with in-memory fallback for AI Studio
let prismaInstance: any;

const noOp = {
  findMany: async () => [],
  findFirst: async () => null,
  findUnique: async () => null,
  create: async (d: any) => d?.data ?? {},
  update: async (d: any) => d?.data ?? {},
  delete: async () => ({}),
  upsert: async (d: any) => d?.create ?? {},
  count: async () => 0,
};

try {
  if (process.env.DATABASE_URL) {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { PrismaClient } = require('@prisma/client');
    prismaInstance = new PrismaClient();
  } else {
    prismaInstance = new Proxy({}, {
      get: () => new Proxy(noOp, {
        get: (target: any, prop: string) => target[prop] || (async () => null)
      })
    });
  }
} catch {
  console.warn('[AI Studio] Database not connected — using Prisma mock');
  prismaInstance = new Proxy({}, {
    get: () => new Proxy(noOp, {
      get: (target: any, prop: string) => target[prop] || (async () => null)
    })
  });
}

export const prisma = prismaInstance;
export default prisma;
