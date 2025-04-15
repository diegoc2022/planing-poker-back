import { GruposService } from './grupos.service';
import { GruposController } from './grupos.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GruposEntity } from './entity/grupos.entity';

@Module({
    imports: [TypeOrmModule.forFeature([GruposEntity])],
    controllers: [
        GruposController,],
    providers: [
        GruposService,],
})
export class GruposModule { }
