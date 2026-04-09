import { Injectable } from '@nestjs/common';
import { EXPERIENCE } from '../data/profile.data';

@Injectable()
export class ExperienceService {
  getAll() {
    return EXPERIENCE;
  }
}
