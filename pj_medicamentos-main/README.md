# 🚑 Gerenciador de Medicamentos

O projeto se consiste na criação de uma aplicação que ajuda as pessoas a controlar o uso de medicamentos, horários e o histórico de saúde. Na aplicação, o usuário poderá fazer login e cadastro; criar, editar e excluir remédios; ver a lista de remédios e sair da aplicação.

A escolha do tema foi motivada pela necessidade de um sistema de controle eficaz de medicamentos. Essa solução tem o objetivo de facilitar o processo de consumo de remédios de forma digital, simples e acessível.


## 👥 Alunas

* Giovanna Marques
* Sofia Josafá
* Leticia Eto


## ▶ Como Rodar o Projeto

1. **Clonar o repositório**

   ```bash
   git clone https://github.com/sosojosafars/modelagem_ts/.git
   cd modelagem_ts
   ```

2. **Instalar dependências do Prisma**

   ```bash
   npm install prisma @prisma/client mongodb
   ```

3. **Instalar dependências de desenvolvimento**

   ```bash
   npm init -y
   npm install --save-dev typescript ts-node @types/node
   ```

4. **Iniciar o Prisma e o TypeScript**

   ```bash
   npx prisma init
   npx tsc --init
   ```

5. **Gerar o cliente Prisma**

   ```bash
   npx prisma generate
   ```

6. **Rodar o Prisma Studio (interface para inserir dados)**

   ```bash
   npx prisma studio
   ```

7. **Rodar o projeto**

   ```bash
   npx ts-node src/index.ts
   ```

## 🧩 Modelagem do Banco de Dados

A modelagem do banco foi realizada com **Prisma ORM** e o banco de dados **MongoDB**, com foco em controlar os medicamentos, agendamentos e histórico de saúde dos pacientes.

### 📘 Visão Geral

A modelagem cobre os seguintes aspectos da aplicação:

* Cadastro de usuários (pacientes e cuidadores)
* Registro e controle de medicamentos
* Agendamento de horários para tomar remédios
* Histórico médico dos pacientes

### 📦 Modelos Prisma

#### 👤 User

```prisma
model User {
  id             String             @id @default(auto()) @map("_id") @db.ObjectId
  email          String             @unique
  password       String
  name           String
  role           UserRole           @default(PATIENT)
  medications    Medication[]       
  medicalHistory MedicalHistory[]   
}
```

* Representa os usuários do sistema.
* Pode ser um paciente ou um cuidador (definido por `role`).
* Um usuário pode ter:

  * Vários medicamentos associados.
  * Vários registros de histórico médico.

#### 💊 Medication

```prisma
model Medication {
  id            String                @id @default(auto()) @map("_id") @db.ObjectId
  name          String
  dosage        String
  instructions  String
  createdAt     DateTime              @default(now())
  userId        String
  user          User                  @relation(fields: [userId], references: [id])
  schedules     MedicationSchedule[]  
}
```

* Representa um medicamento que um paciente precisa tomar.
* Possui:

  * Nome, dosagem e instruções.
  * Data de criação automática.
  * Relacionamento com um usuário (paciente).
  * Lista de agendamentos (`MedicationSchedule`).

#### ⏰ MedicationSchedule

```prisma
model MedicationSchedule {
  id           String          @id @default(auto()) @map("_id") @db.ObjectId
  dateTime     DateTime
  status       ScheduleStatus  @default(PENDING)
  medicationId String
  medication   Medication      @relation(fields: [medicationId], references: [id])
}
```

* Define quando o medicamento deve ser tomado.
* Campos:

  * `dateTime`: data e hora do agendamento.
  * `status`: enum indicando se a dose foi tomada, perdida ou está pendente.
  * FK para a medicação correspondente.

#### 📋 MedicalHistory

```prisma
model MedicalHistory {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  condition String
  notes     String?
  allergies String?
  date      DateTime @default(now())
  userId    String
  user      User     @relation(fields: [userId], references: [id])
}
```

* Representa um registro do histórico de saúde do paciente.
* Campos:

  * `condition`: condição médica registrada.
  * `notes`, `allergies`: informações adicionais.
  * `date`: data automática do registro.
  * FK para o usuário correspondente.


### 🧾 Enums

#### UserRole

```prisma
enum UserRole {
  PATIENT
  CAREGIVER
}
```

* Define o tipo de usuário:

  * `PATIENT`: paciente que toma o medicamento.
  * `CAREGIVER`: cuidador que acompanha o paciente.

#### ScheduleStatus

```prisma
enum ScheduleStatus {
  PENDING
  TAKEN
  MISSED
}
```

* Define o status de um agendamento de medicação:

  * `PENDING`: ainda não tomado.
  * `TAKEN`: já tomado.
  * `MISSED`: dose perdida.


### 🔗 Relacionamentos entre os Modelos

| Modelo                              | Relacionamento                            | Tipo |
| ----------------------------------- | ----------------------------------------- | ---- |
| `User` → `Medication`               | Um usuário possui vários medicamentos     | 1\:N |
| `User` → `MedicalHistory`           | Um usuário possui vários históricos       | 1\:N |
| `Medication` → `MedicationSchedule` | Um medicamento possui vários agendamentos | 1\:N |
