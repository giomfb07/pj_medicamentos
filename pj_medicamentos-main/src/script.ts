import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'Maria da Silva',
      email: 'maria@example.com',
      password: 'senha123',
      role: 'PATIENT',
    },
  });

  console.log('Usuário criado:', user);

  const medication1 = await prisma.medication.create({
    data: {
      name: 'Paracetamol',
      dosage: '500mg',
      instructions: 'Tomar após o café da manhã',
      userId: user.id,
    },
  });

  const medication2 = await prisma.medication.create({
    data: {
      name: 'Ibuprofeno',
      dosage: '400mg',
      instructions: 'Tomar antes de dormir',
      userId: user.id,
    },
  });

  console.log('Medicamentos criados:', medication1, medication2);

  await prisma.medicationSchedule.createMany({
    data: [
      {
        dateTime: new Date('2025-09-11T08:00:00Z'),
        status: 'PENDING',
        medicationId: medication1.id,
      },
      {
        dateTime: new Date('2025-09-11T22:00:00Z'),
        status: 'PENDING',
        medicationId: medication2.id,
      },
    ],
  });

  await prisma.medicalHistory.create({
    data: {
      condition: 'Hipertensão',
      notes: 'Começou tratamento em 2023.',
      userId: user.id,
    },
  });

  const users = await prisma.user.findMany({
    include: {
      medications: {
        include: {
          schedules: true,
        },
      },
      medicalHistory: true,
    },
  });

  console.dir(users, { depth: null });
}

main()
  .catch((e) => {
    console.error('Erro:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });