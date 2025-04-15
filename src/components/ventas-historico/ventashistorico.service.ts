/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VentasHistoricosEntity } from './entity/create-ventas-historico.entity';
import { Repository } from 'typeorm';
import { VentasHistoricosDto } from './dto/create-ventas-historico.dto';

@Injectable()
export class VentasHistoricosService {
    constructor(
        @InjectRepository(VentasHistoricosEntity)
        private repository: Repository<VentasHistoricosEntity>
    ){}

    functCreateVentasHistoricos(data:VentasHistoricosDto){
        return this.repository.save(data);
    }
}
