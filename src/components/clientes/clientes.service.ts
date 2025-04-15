import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientesEntity } from './entity/clientes.entity';
import { Repository } from 'typeorm';
import { format } from 'date-fns';

@Injectable()
export class ClientesService {
    fecha_actual:Date = new Date();
    constructor(
        @InjectRepository(ClientesEntity)
        private repository:Repository<ClientesEntity>
    ){}

    async funct_registra_clientes_s(data:any){
        const fecha = format(this.fecha_actual,'yyyy-MM-dd HH:mm');
        const result = await this.repository.find({
            where:{
                codigo_cliente:data.cedula
            }
        })

        if (result.length > 0) {
            return{
                status:409,
                msg:'Ya existe un registro con estas misma caracteristicas'
            }           
        }else{
            return this.repository.save({
                codigo_cliente:data.cedula,      
                nombre:data.nombre_cliente.toUpperCase(),      
                telefono:data.telefono,
                codigo_venta:1,
                fecha_registro:fecha  
            });  
        } 
        
    }

    funct_retorna_clientes_s(){
        return this.repository.find();
    }


    funct_retorna_one_cliente_s(data:any){
        return this.repository.find({
            where:{
                codigo_cliente:data
            }
        })
    }
}
