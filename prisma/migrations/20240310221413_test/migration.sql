/*
  Warnings:

  - Added the required column `dateRangeId` to the `Tournament` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fromDate` to the `Tournament` table without a default value. This is not possible if the table is not empty.
  - Added the required column `increment` to the `Tournament` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startingTime` to the `Tournament` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tournament" ADD COLUMN     "dateRangeId" TEXT NOT NULL,
ADD COLUMN     "fromDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "increment" INTEGER NOT NULL,
ADD COLUMN     "startingTime" INTEGER NOT NULL,
ADD COLUMN     "toDate" TIMESTAMP(3),
ALTER COLUMN "subtitle" DROP NOT NULL;
