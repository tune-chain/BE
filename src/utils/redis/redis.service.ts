import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import Redis from 'ioredis';
@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private readonly redis: Redis;
  private readonly sortedSetKey = 'logs';

  constructor() {
    this.redis = new Redis({
      host: process.env.REDIS_HOST || '127.0.0.1',
      port: Number(process.env.REDIS_PORT) || 6379,
    });
  }

  onModuleInit() {
    console.log('RedisService initialized');
  }

  onModuleDestroy() {
    this.redis.disconnect();
    console.log('RedisService disconnected');
  }

  async clearLogs(): Promise<void> {
    await this.redis.del(this.sortedSetKey);
    console.log('Redis logs cleared.');
  }
}
