# 🚑 **Gerenciador de Medicamentos**

Uma aplicação voltada para o **controle de medicamentos e histórico de saúde**, permitindo que pacientes e cuidadores registrem remédios, agendamentos e informações médicas de forma simples e digital.

O sistema possibilita:

* Cadastro e login de usuários (pacientes e cuidadores);
* Criação, edição e exclusão de medicamentos;
* Agendamento de horários para tomar remédios;
* Visualização do histórico médico e dos agendamentos.

---

## 👩‍💻 **Autoria**

**Desenvolvido por:** Giovanna Marques

---

## ⚙️ **Tecnologias Utilizadas**

* **Node.js** + **Express** — servidor e API REST
* **TypeScript** — tipagem estática e maior segurança no código
* **Prisma ORM** — mapeamento e acesso ao banco de dados
* **MongoDB** — banco NoSQL utilizado para armazenar os dados
* **TS-Node** — execução direta de arquivos TypeScript

---

## ▶️ **Como Rodar o Projeto**

### 1. **Clonar o repositório**

```bash
git clone https://github.com/giomfb07/pj_medicamentos.git
cd pj_medicamentos
```

### 2. **Instalar dependências**

```bash
npm install
```

### 3. **Configurar o Prisma**

Inicialize o Prisma e gere o cliente:

```bash
npx prisma init
npx prisma generate
```

> 🔧 Edite o arquivo `.env` criado pelo Prisma e adicione sua URL do MongoDB:
>
> ```
> DATABASE_URL="mongodb+srv://usuario:senha@cluster.mongodb.net/medicamentos"
> ```

### 4. **Rodar o Prisma Studio (interface visual para o banco)**

```bash
npx prisma studio
```

### 5. **Executar o servidor**

```bash
npx ts-node src/index.ts
```

> O servidor será iniciado em:
> **[http://localhost:3000](http://localhost:3000)**

---

## 🧩 **Modelagem do Banco de Dados**

A modelagem foi realizada com **Prisma ORM** e **MongoDB**, cobrindo:

* Usuários (pacientes e cuidadores);
* Medicamentos associados a cada usuário;
* Agendamentos de doses de medicamentos;
* Histórico médico do paciente.

---

### 👤 **User**

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

### 💊 **Medication**

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

### ⏰ **MedicationSchedule**

```prisma
model MedicationSchedule {
  id           String          @id @default(auto()) @map("_id") @db.ObjectId
  dateTime     DateTime
  status       ScheduleStatus  @default(PENDING)
  medicationId String
  medication   Medication      @relation(fields: [medicationId], references: [id])
}
```

### 📋 **MedicalHistory**

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

## 🧾 **Enums**

### 👤 UserRole

```prisma
enum UserRole {
  PATIENT
  CAREGIVER
}
```

* `PATIENT`: paciente que toma os medicamentos
* `CAREGIVER`: cuidador responsável

### ⏳ ScheduleStatus

```prisma
enum ScheduleStatus {
  PENDING
  TAKEN
  MISSED
}
```

* `PENDING`: dose ainda não tomada
* `TAKEN`: dose já tomada
* `MISSED`: dose perdida

---

## 🔗 **Relacionamentos**

| Modelo                              | Relacionamento                            | Tipo |
| ----------------------------------- | ----------------------------------------- | ---- |
| `User` → `Medication`               | Um usuário possui vários medicamentos     | 1:N  |
| `User` → `MedicalHistory`           | Um usuário possui vários históricos       | 1:N  |
| `Medication` → `MedicationSchedule` | Um medicamento possui vários agendamentos | 1:N  |
