import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UniqueIdService {
  private numberofGeneratedIds = 0;

  //gera ID unico com parte do prefixo se ouver
  public generateUniqueIdWithPrefix(prefix: string): string {
    if (!prefix) {
      throw Error('Prefix can not be empty');
    }
    const uniqueId = this.generateUniqueId();
    this.numberofGeneratedIds++;
    return `${prefix}-${uniqueId}`;
  }

  // pega o numero do id
  public getNumberOfGenerateUniqueIds(): number {
    return this.numberofGeneratedIds;
  }

  // gera ID unico
  private generateUniqueId(): string {
    return uuidv4();
  }
}
