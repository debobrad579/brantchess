-- DropIndex
DROP INDEX "HomeInformation_location_key";

-- AlterTable
ALTER TABLE "HomeInformation" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "HomeInformation_pkey" PRIMARY KEY ("id");
