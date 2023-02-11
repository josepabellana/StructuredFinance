/**
 * Singleton-like prisma/client instance
 */

import { PrismaClient } from "@prisma/client";

// instantiate prisma
const prisma = new PrismaClient();

export default prisma;