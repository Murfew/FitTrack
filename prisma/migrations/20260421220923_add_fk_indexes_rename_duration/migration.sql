/*
  Warnings:

  - You are about to drop the column `duration` on the `workouts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "workouts" DROP COLUMN "duration",
ADD COLUMN     "durationSeconds" INTEGER;

-- CreateIndex
CREATE INDEX "exercises_workout_id_idx" ON "exercises"("workout_id");

-- CreateIndex
CREATE INDEX "sets_exercise_id_idx" ON "sets"("exercise_id");
