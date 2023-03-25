/*
  Warnings:

  - A unique constraint covering the columns `[name,unitId]` on the table `departments` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,unitId,departmentId]` on the table `employees` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email,unitId,departmentId]` on the table `employees` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `job_categories` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,jobCategoryId]` on the table `job_titles` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,laboratoryId]` on the table `units` will be added. If there are existing duplicate values, this will fail.
  - Made the column `jobTitleId` on table `employees` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "employees" DROP CONSTRAINT "employees_jobTitleId_fkey";

-- DropIndex
DROP INDEX "departments_name_key";

-- DropIndex
DROP INDEX "employees_email_key";

-- AlterTable
ALTER TABLE "employees" ADD COLUMN     "hiringDate" TIMESTAMP(3),
ALTER COLUMN "jobTitleId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "departments_name_unitId_key" ON "departments"("name", "unitId");

-- CreateIndex
CREATE UNIQUE INDEX "employees_name_unitId_departmentId_key" ON "employees"("name", "unitId", "departmentId");

-- CreateIndex
CREATE UNIQUE INDEX "employees_email_unitId_departmentId_key" ON "employees"("email", "unitId", "departmentId");

-- CreateIndex
CREATE UNIQUE INDEX "job_categories_name_key" ON "job_categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "job_titles_name_jobCategoryId_key" ON "job_titles"("name", "jobCategoryId");

-- CreateIndex
CREATE UNIQUE INDEX "units_name_laboratoryId_key" ON "units"("name", "laboratoryId");

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_jobTitleId_fkey" FOREIGN KEY ("jobTitleId") REFERENCES "job_titles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
