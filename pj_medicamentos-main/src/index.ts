import express, { Request, Response } from 'express';
import { PrismaClient, Prisma, ScheduleStatus } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
const port = 3000;

app.use(express.json());



// Criar um novo usuário
app.post('/api/user', async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const newUser = await prisma.user.create({
      data: { name, email, password, role: 'PATIENT' },
    });

    res.status(201).json(newUser);
  } catch (error: unknown) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        // Violação de campo único (email duplicado)
        return res.status(409).json({ error: 'Email já cadastrado.' });
      }
    }

    console.error('Erro durante cadastro:', error);
    res.status(500).json({ error: 'Erro no servidor.' });
  }
});

// Listar todos os usuários
app.get('/api/users', async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    console.error('Erro ao listar usuários:', error);
    res.status(500).json({ error: 'Erro no servidor.' });
  }
});

// Buscar usuário por ID
app.get('/api/user/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({ where: { id } });

    if (!user) {
      return res.status(404).json({ error: `Usuário com ID ${id} não encontrado.` });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    res.status(500).json({ error: 'Erro no servidor.' });
  }
});

// Atualizar usuário
app.put('/api/user/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  try {
    const updatedUser = await prisma.user.update({
      where: { id },
      data: { name, email, password },
    });

    res.status(200).json(updatedUser);
  } catch (error: unknown) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        // Registro não encontrado
        return res.status(404).json({ error: `Usuário com ID ${id} não encontrado.` });
      } else if (error.code === 'P2002') {
        // Violação de campo único
        return res.status(409).json({ error: 'Email já cadastrado.' });
      }
    }

    console.error('Erro ao atualizar usuário:', error);
    res.status(500).json({ error: 'Erro no servidor.' });
  }
});

// Deletar usuário
app.delete('/api/user/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.user.delete({ where: { id } });
    res.status(204).send();
  } catch (error: unknown) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      return res.status(404).json({ error: `Usuário com ID ${id} não encontrado.` });
    }

    console.error('Erro ao deletar usuário:', error);
    res.status(500).json({ error: 'Erro no servidor.' });
  }
});

// Criar novo medicamento
app.post('/api/medication', async (req: Request, res: Response) => {
  const { name, dosage, instructions, userId } = req.body;

  try {
    const newMedication = await prisma.medication.create({
      data: { name, dosage, instructions, userId },
    });

    res.status(201).json(newMedication);
  } catch (error) {
    console.error('Erro ao adicionar medicamento:', error);
    res.status(500).json({ error: 'Erro no servidor.' });
  }
});

// Listar medicamentos
app.get('/api/medications', async (req: Request, res: Response) => {
  try {
    const medications = await prisma.medication.findMany();
    res.status(200).json(medications);
  } catch (error) {
    console.error('Erro ao listar medicamentos:', error);
    res.status(500).json({ error: 'Erro no servidor.' });
  }
});

// Atualizar medicamento
app.put('/api/medication/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, dosage, instructions } = req.body;

  try {
    const updatedMedication = await prisma.medication.update({
      where: { id },
      data: { name, dosage, instructions },
    });

    res.status(200).json(updatedMedication);
  } catch (error: unknown) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      return res.status(404).json({ error: `Medicamento com ID ${id} não encontrado.` });
    }

    console.error('Erro ao atualizar medicamento:', error);
    res.status(500).json({ error: 'Erro no servidor.' });
  }
});

// Deletar medicamento
app.delete('/api/medication/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.medication.delete({ where: { id } });
    res.status(204).send();
  } catch (error: unknown) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      return res.status(404).json({ error: `Medicamento com ID ${id} não encontrado.` });
    }

    console.error('Erro ao deletar medicamento:', error);
    res.status(500).json({ error: 'Erro no servidor.' });
  }
});

// Criar agendamento
app.post('/api/medication-schedule', async (req: Request, res: Response) => {
  const { medicationId, dateTime } = req.body;

  try {
    const schedule = await prisma.medicationSchedule.create({
      data: {
        dateTime: new Date(dateTime),
        status: ScheduleStatus.PENDING,
        medicationId,
      },
    });

    res.status(201).json(schedule);
  } catch (error) {
    console.error('Erro ao agendar medicamento:', error);
    res.status(500).json({ error: 'Erro no servidor.' });
  }
});

// Listar agendamentos
app.get('/api/medication-schedules', async (req: Request, res: Response) => {
  try {
    const schedules = await prisma.medicationSchedule.findMany();
    res.status(200).json(schedules);
  } catch (error) {
    console.error('Erro ao listar agendamentos:', error);
    res.status(500).json({ error: 'Erro no servidor.' });
  }
});

// Atualizar agendamento
app.put('/api/medication-schedule/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const updatedSchedule = await prisma.medicationSchedule.update({
      where: { id },
      data: { status },
    });

    res.status(200).json(updatedSchedule);
  } catch (error: unknown) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      return res.status(404).json({ error: `Agendamento com ID ${id} não encontrado.` });
    }

    console.error('Erro ao atualizar agendamento:', error);
    res.status(500).json({ error: 'Erro no servidor.' });
  }
});

// Deletar agendamento
app.delete('/api/medication-schedule/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.medicationSchedule.delete({ where: { id } });
    res.status(204).send();
  } catch (error: unknown) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      return res.status(404).json({ error: `Agendamento com ID ${id} não encontrado.` });
    }

    console.error('Erro ao deletar agendamento:', error);
    res.status(500).json({ error: 'Erro no servidor.' });
  }
});


app.listen(port, () => {
  console.log(`🚀 Servidor rodando na porta ${port}`);
});
