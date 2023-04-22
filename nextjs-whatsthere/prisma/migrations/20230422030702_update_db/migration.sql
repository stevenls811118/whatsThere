/*
  Warnings:

  - You are about to drop the `destinations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `landmarks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `trip_planners` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `listId` to the `attractions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "trip_planners" DROP CONSTRAINT "trip_planners_destinationId_fkey";

-- DropForeignKey
ALTER TABLE "trip_planners" DROP CONSTRAINT "trip_planners_landmarkId_fkey";

-- AlterTable
ALTER TABLE "attractions" ADD COLUMN     "listId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "destinations";

-- DropTable
DROP TABLE "landmarks";

-- DropTable
DROP TABLE "trip_planners";

-- CreateTable
CREATE TABLE "lists" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "lists_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "lists" ADD CONSTRAINT "lists_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attractions" ADD CONSTRAINT "attractions_listId_fkey" FOREIGN KEY ("listId") REFERENCES "lists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
