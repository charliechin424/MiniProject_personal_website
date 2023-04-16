/*
  Warnings:

  - Added the required column `NTU_mail` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Student_ID` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `NTU_mail` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Student_ID` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "NTU_mail" TEXT NOT NULL,
ADD COLUMN     "Student_ID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "NTU_mail" TEXT NOT NULL,
ADD COLUMN     "Student_ID" TEXT NOT NULL;
