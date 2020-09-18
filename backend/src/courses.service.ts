import { Injectable } from '@nestjs/common';
import  Course  from './entities/course.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CoursesService {
    coursesReository: any;
    constructor(
        @InjectRepository(Course)
        private coursesRepository: Repository<Course>,
      ) {}
    async findAll():Promise<Course[]>{
        return this.coursesReository.find();
    /*
    return [
        {
            id:'100',
            number:'01204111',
            title:'Computer programming'
        },
        {
            id:'213fds',
            number: '01204211',
            title:'Discrete math'
        },
        {
            id:'dsdsdsdsds',
            number:'0123552',
            title:'designdad adadadad'
        },
    ];
    */
  }
}
