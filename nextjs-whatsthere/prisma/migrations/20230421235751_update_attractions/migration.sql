/*
  Warnings:

  - You are about to drop the column `destinationId` on the `attractions` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "attractions" DROP CONSTRAINT "attractions_destinationId_fkey";

-- AlterTable
ALTER TABLE "attractions" DROP COLUMN "destinationId";
