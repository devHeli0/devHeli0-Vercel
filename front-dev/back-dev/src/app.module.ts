import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContatoService } from './contato/contato.service';
import { ContatoController } from './contato/contato.controller';

@Module({
  imports: [],
  controllers: [AppController, ContatoController],
  providers: [AppService, ContatoService],
})
export class AppModule {}
