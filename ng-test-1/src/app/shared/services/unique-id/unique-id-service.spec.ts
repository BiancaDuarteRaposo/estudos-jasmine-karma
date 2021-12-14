import { UniqueIdService } from './unique-id-service';

describe('UniqueIdService', () => {
  // padrão de descrição :
  // '# ....... should ...oq deve fazer....'
  it('#generateUniqueIdWithPrefix should genarate id when called with prefix', () => {
    const service = new UniqueIdService();
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id).toContain('app-');
  });
  let service: UniqueIdService;
  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} 
        should genarate id when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id).toContain('app-');
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} 
  should not generate duplicate IDs when called multiple times`, () => {
    const ids = new Set();
    for (let i = 0; i < 50; i++) {
      const id = service.generateUniqueIdWithPrefix('app');
      ids.add(id);
    }
    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} 
should return the number of generateIds when called`, () => {
    service.generateUniqueIdWithPrefix('app');
    service.generateUniqueIdWithPrefix('app');
    expect(service.getNumberOfGenerateUniqueIds()).toBe(2);
  });
});
// npm run test para rodar o teste
