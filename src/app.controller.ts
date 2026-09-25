import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get()
  sampleController(): string {
    return "Sample Controller text";
  }

  // Define the sample health route
  @Get('/health')
  healthRoute(): any {
    return {
      success: true,
      db: "DB Health is fine",
      redis: "Redis health is fine",
      message: 'Health of the server is fine'
    }
  }

 
  // sample text added
}
