/*
  Warnings:

  - You are about to drop the column `fromDate` on the `Tournament` table. All the data in the column will be lost.
  - You are about to drop the column `toDate` on the `Tournament` table. All the data in the column will be lost.
  - Added the required column `startDate` to the `Tournament` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tournament" DROP COLUMN "fromDate",
DROP COLUMN "toDate",
ADD COLUMN     "endDate" TIMESTAMP(3),
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL;
