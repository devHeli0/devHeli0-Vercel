import { Injectable } from '@nestjs/common';
import * as amqp from 'amqplib';
import * as nodemailer from 'nodemailer';

@Injectable()
export class ContatoService {
  async enviarMensagem(mensagem: any) {
    // Conecte-se ao RabbitMQ
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();

    const queue = 'mensagens';
    await channel.assertQueue(queue, { durable: true });

    // Envie a mensagem para a fila
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(mensagem)));

    // Configure o nodemailer para envio de e-mails
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });
    // Envie o e-mail
    await transporter.sendMail(
      {
        // from: mensagem.email,
        to: process.env.GMAIL_USER,
        replyTo: mensagem.email,
        subject: mensagem.assunto,
        text: mensagem.conteudo,
      },
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('The email was sent successfully');
        }
      },
    );
  }
}
