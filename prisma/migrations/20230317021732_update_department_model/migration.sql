/*
  Warnings:

  - Made the column `unitId` on table `departments` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "departments" DROP CONSTRAINT "departments_unitId_fkey";

-- AlterTable
ALTER TABLE "departments" ALTER COLUMN "unitId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "departments" ADD CONSTRAINT "departments_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "units"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
