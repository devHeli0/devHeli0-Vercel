import { Controller, Post, Body } from '@nestjs/common';
import { ContatoService } from './contato.service';

@Controller('contato')
export class ContatoController {
  constructor(private readonly contatoService: ContatoService) {}

  @Post('enviar')
  async enviarMensagem(@Body() mensagem: any) {
    await this.contatoService.enviarMensagem(mensagem);
    return { message: 'Mensagem enviada com sucesso' };
  }
}
