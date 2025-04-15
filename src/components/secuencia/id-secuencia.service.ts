import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IdSecuenciaEntity } from './entity/id-secuencia.entity';
import { IdSecuenciaDto } from './dto/id-secuencia.dto';


@Injectable()
export class IdSecuenciaService {
    result: any
    constructor(
        @InjectRepository(IdSecuenciaEntity) 
        private sencuencia: Repository<IdSecuenciaEntity>
    ){}

    getIdSecuencia(){       
       return this.sencuencia.find();
    }

   async functEditaSecuenciaService(data:IdSecuenciaDto){                        
        return await this.sencuencia.update({nombre:data[0].nombre},{id_secuencia:data[0].id_secuencia});    
    } 
}
