/*
  Warnings:

  - You are about to drop the `attractions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `destinations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `landmarks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `trip_planners` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "trip_planners" DROP CONSTRAINT "trip_planners_destinationId_fkey";

-- DropForeignKey
ALTER TABLE "trip_planners" DROP CONSTRAINT "trip_planners_landmarkId_fkey";

-- DropTable
DROP TABLE "attractions";

-- DropTable
DROP TABLE "destinations";

-- DropTable
DROP TABLE "landmarks";

-- DropTable
DROP TABLE "trip_planners";

-- DropTable
DROP TABLE "users";
