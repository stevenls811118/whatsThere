/*
  Warnings:

  - You are about to drop the column `userId` on the `trip_planners` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "trip_planners" DROP CONSTRAINT "trip_planners_userId_fkey";

-- AlterTable
ALTER TABLE "trip_planners" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "address",
DROP COLUMN "city",
DROP COLUMN "password";
