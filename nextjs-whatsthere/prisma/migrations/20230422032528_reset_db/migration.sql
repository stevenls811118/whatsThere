/*
  Warnings:

  - You are about to drop the `attractions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `lists` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "attractions" DROP CONSTRAINT "attractions_listId_fkey";

-- DropForeignKey
ALTER TABLE "lists" DROP CONSTRAINT "lists_userId_fkey";

-- DropTable
DROP TABLE "attractions";

-- DropTable
DROP TABLE "lists";

-- DropTable
DROP TABLE "users";
