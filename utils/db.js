const { PrismaClient, Prisma } = require('@prisma/client');

const db = new PrismaClient();

module.exports = { db, Prisma };