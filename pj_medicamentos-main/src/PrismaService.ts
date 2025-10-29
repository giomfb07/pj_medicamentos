
import { PrismaClient } from '@prisma/client';


class PrismaService extends PrismaClient {
  private static instance: PrismaService;

  private constructor() {
    super({
      log: ['query', 'info', 'warn', 'error'], // opcional: logs úteis em dev
    });
  }

  /**
   * Retorna a instância única do PrismaService.
   */
  public static getInstance(): PrismaService {
    if (!PrismaService.instance) {
      PrismaService.instance = new PrismaService();
    }
    return PrismaService.instance;
  }

  /**
   * Fecha a conexão com o banco de dados (útil para testes ou shutdown do app).
   */
  public async disconnect(): Promise<void> {
    await this.$disconnect();
  }
}

export const prisma = PrismaService.getInstance();
export default PrismaService;
