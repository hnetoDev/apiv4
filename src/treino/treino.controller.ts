import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TreinoService } from './treino.service';
import { CreateTreinoDto } from './dto/create-treino.dto';
import { UpdateTreinoDto } from './dto/update-treino.dto';

@Controller('treino')
export class TreinoController {
  constructor(private readonly treinoService: TreinoService) {}

  @Post()
  create(@Body() createTreinoDto: CreateTreinoDto) {
    return this.treinoService.create(createTreinoDto);
  }

  @Get()
  findAll() {
    return this.treinoService.findAll();
  }

  @Post('search')
  search(@Body('search') search: string){
    return this.treinoService.search(search)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.treinoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTreinoDto: UpdateTreinoDto) {
    return this.treinoService.update(id, updateTreinoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.treinoService.remove(id);
  }
}
