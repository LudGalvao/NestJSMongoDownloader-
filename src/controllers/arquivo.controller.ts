import { ApiBody, ApiTags } from '@nestjs/swagger';
import { ArquivoService } from './../services/arquivo.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Arquivo } from 'src/schemas/arquivo.schema';
import { CreateArquivoDto } from 'src/dto/create-arquivo.dto';

@ApiTags('Arquivo')
@Controller('Arquivo')
export class ArquivoController{

    constructor(private readonly arquivoService: ArquivoService){}

    @Post()
    @ApiBody({ type: CreateArquivoDto })
    async create(@Body() data: CreateArquivoDto): Promise<Arquivo> {
        return this.arquivoService.create(data);
    }

    @Get()
    async findAll(): Promise<Arquivo[]> {
        return this.arquivoService.findAll();
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() data: any): Promise<Arquivo> {
        return this.arquivoService.update(id, data);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<any> {
        return this.arquivoService.delete(id);
    }

}