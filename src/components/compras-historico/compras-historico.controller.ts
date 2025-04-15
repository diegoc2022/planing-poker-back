import { Body, Controller, Post } from '@nestjs/common';
import { ComprasHistoricoService } from './compras-historico.service';
import { ComprasHistoricoDto } from './dto/compras-historico.dto';

@Controller('compras-historico')
export class ComprasHistoricoController {
    constructor(private compras_h:ComprasHistoricoService){}

    @Post()
    funct_create_compras_historico(@Body() data:ComprasHistoricoDto){
        return this.compras_h.funct_create_compras_historico(data);
    }
}
