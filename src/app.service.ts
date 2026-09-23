import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service.js';

@Injectable()
export class AppService {

  // this is for the testing purpose
  constructor(private readonly prisma: PrismaService) {}

  async testConnection() {
    return this.prisma.onModuleInit()
  }
 
  // getHello(): any {
  //   return this.prisma;
  // }
}
