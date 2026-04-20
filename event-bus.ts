
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

export const eventBus = ClientProxyFactory.create({
  transport: Transport.RMQ,
  options: {
    urls: ['amqp://localhost:5672'],
    queue: 'events',
  },
});
