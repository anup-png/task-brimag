// import { PrismaClient } from '@prisma/client';
// import { PrismaPg } from '@prisma/adapter-pg';
// import pg from 'pg';



// const pool = new pg.Pool({ 
//   connectionString: process.env.DATABASE_URL 
// });



// const adapter = new PrismaPg(pool);
// const prisma = new PrismaClient({ adapter });

// // Test query
// prisma.$connect()
//   .then(() => console.log('Prisma connected successfully'))
//   .catch(err => console.error('Prisma connection error:', err));

// export default prisma;


import pkg from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

const { PrismaClient } = pkg;

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false } // Required for Render + Neon
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

// Prevent multiple client instances in Production (Render/Vercel)
if (process.env.NODE_ENV !== 'production') globalThis.prisma ??= prisma;

export default prisma;
