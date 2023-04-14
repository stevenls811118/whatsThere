/*
  Warnings:

  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "password" TEXT NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "city" VARCHAR(255) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trip_planner" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "landmarkId" INTEGER NOT NULL,
    "destinationId" INTEGER NOT NULL,

    CONSTRAINT "trip_planner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "landmark" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "city" VARCHAR(255) NOT NULL,

    CONSTRAINT "landmark_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "destination" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "city" VARCHAR(255) NOT NULL,

    CONSTRAINT "destination_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "attraction" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "rating" INTEGER NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "destinationId" INTEGER NOT NULL,

    CONSTRAINT "attraction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "trip_planner" ADD CONSTRAINT "trip_planner_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trip_planner" ADD CONSTRAINT "trip_planner_landmarkId_fkey" FOREIGN KEY ("landmarkId") REFERENCES "landmark"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trip_planner" ADD CONSTRAINT "trip_planner_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "destination"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attraction" ADD CONSTRAINT "attraction_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "destination"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
