import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateComprasFacturasEntity } from './entity/createComprasFacturas.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ComprasFacturasService {
constructor(
    @InjectRepository(CreateComprasFacturasEntity)
    private comprasFacturas:Repository<CreateComprasFacturasEntity>
){}

async  functRetornaComprasFacturas(id:any){       
    return await this.comprasFacturas.count({
        where: { factura:id.toUpperCase() } 
    });        
}

functCreateComprasFacturas(num:any){
    return this.comprasFacturas.save(num);
}

}
