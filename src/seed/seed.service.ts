import { Injectable } from '@nestjs/common';
import { SeedHelpers } from '@/seed';

@Injectable()
export class SeedService {
  runSeed() {
    return SeedHelpers.runSeed();
  }
}
