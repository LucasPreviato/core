-- DropForeignKey
ALTER TABLE "departments" DROP CONSTRAINT "departments_unitId_fkey";

-- AlterTable
ALTER TABLE "departments" ALTER COLUMN "unitId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "departments" ADD CONSTRAINT "departments_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "units"("id") ON DELETE SET NULL ON UPDATE CASCADE;
