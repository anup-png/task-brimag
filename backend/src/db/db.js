
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Test connection
prisma.$connect()
  .then(() => console.log('Prisma connected successfully'))
  .catch(err => console.error('Prisma connection error:', err));

export default prisma;
