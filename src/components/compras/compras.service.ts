
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ComprasEntity } from './entity/compras.entity';
import { Repository } from 'typeorm';
import { ComprasDto } from './dto/compras.dto';

@Injectable()
export class ComprasService {
    constructor(
        @InjectRepository(ComprasEntity)
        private compras: Repository<ComprasEntity>        
    ){}

    functCreateCompras(createCompras:ComprasDto){               
       return this.compras.save(createCompras);
    }

    functRetornaCompras(){
        return this.compras.find();
    }

    functEliminaItemCompras(id:any){                 
        return this.compras.delete({id:id})
    }

   async functEliminaFacturaCompras(id:any):Promise<void>{                          
        await this.compras.delete({num_factura:id})
    }
    
}
