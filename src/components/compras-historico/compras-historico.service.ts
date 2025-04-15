
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ComprasHistoricoEntity } from './entity/compras-historico.entity';
import { Repository } from 'typeorm';
import { ComprasHistoricoDto } from './dto/compras-historico.dto';

@Injectable()
export class ComprasHistoricoService {
    constructor(
        @InjectRepository(ComprasHistoricoEntity)
        private compras_h:Repository<ComprasHistoricoEntity>            
        ){}

        funct_create_compras_historico(data:ComprasHistoricoDto){
            const result = this.compras_h.create(data);           
            return this.compras_h.save(result);
        }
}
