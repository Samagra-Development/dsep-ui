import { Test, TestingModule } from '@nestjs/testing';
import { SelectController } from './select.controller';

describe('SelectController', () => {
  let controller: SelectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SelectController],
    }).compile();

    controller = module.get<SelectController>(SelectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
