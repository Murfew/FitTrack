import { prisma } from '@/lib/prisma';

async function main() {
  const user = await prisma.user.upsert({
    where: { email: 'user@example.com' },
    update: {},
    create: {
      id: crypto.randomUUID(),
      email: 'user@example.com',
      name: 'Example User',
    },
  });

  await prisma.workout.deleteMany({ where: { userId: user.id } });

  await prisma.workout.create({
    data: {
      name: 'Push Day',
      date: new Date('2026-04-18T09:00:00Z'),
      durationSeconds: 3300,
      userId: user.id,
      exercises: {
        create: [
          {
            name: 'Flat Smith Press',
            order: 1,
            sets: {
              create: [
                { order: 1, reps: 5, weight: 185 },
                { order: 2, reps: 5, weight: 185 },
                { order: 3, reps: 4, weight: 185 },
              ],
            },
          },
          {
            name: 'Machine Shoulder Press',
            order: 2,
            sets: {
              create: [
                { order: 1, reps: 8, weight: 95 },
                { order: 2, reps: 7, weight: 95 },
                { order: 3, reps: 6, weight: 95 },
              ],
            },
          },
        ],
      },
    },
  });

  await prisma.workout.create({
    data: {
      name: 'Pull Day',
      date: new Date('2026-04-20T10:30:00Z'),
      durationSeconds: 3600,
      userId: user.id,
      exercises: {
        create: [
          {
            name: 'Deadlift',
            order: 1,
            sets: {
              create: [
                { order: 1, reps: 5, weight: 225 },
                { order: 2, reps: 5, weight: 245 },
                { order: 3, reps: 3, weight: 265 },
              ],
            },
          },
          {
            name: 'Barbell Row',
            order: 2,
            sets: {
              create: [
                { order: 1, reps: 8, weight: 135 },
                { order: 2, reps: 8, weight: 135 },
              ],
            },
          },
        ],
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());
