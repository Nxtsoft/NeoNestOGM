import { Test, TestingModule } from '@nestjs/testing';
import { NeoNestOgmService } from './neo-nest-ogm.service';

describe('NeoNestOgmService', () => {
  let service: NeoNestOgmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NeoNestOgmService],
    }).compile();

    service = module.get<NeoNestOgmService>(NeoNestOgmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
