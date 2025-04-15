
import { Body, Controller, Get, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { IdSecuenciaService } from './id-secuencia.service';
import { IdSecuenciaDto } from './dto/id-secuencia.dto';


@Controller('secuencia')
export class IdSecuenciaController {
    constructor(
        private secuenciaService:IdSecuenciaService
    ){}

    @Get()
    getIdSecuencia(){
      return  this.secuenciaService.getIdSecuencia();
    }

    @Patch()
    async functEditaSecuencia(@Body() data:IdSecuenciaDto){         
      return await this.secuenciaService.functEditaSecuenciaService(data);     
    }
}
