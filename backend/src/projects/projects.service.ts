import { Injectable } from '@nestjs/common';
import { PROJECTS } from '../data/profile.data';

@Injectable()
export class ProjectsService {
  getAll() {
    return PROJECTS;
  }
}
