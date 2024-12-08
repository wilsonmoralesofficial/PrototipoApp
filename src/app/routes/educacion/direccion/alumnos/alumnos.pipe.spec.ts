import { Utils } from 'src/app/core/services/utils/utils.service';
import { AlumnosPipe } from './alumnos.pipe';

describe('AlumnosPipe', () => {
  it('create an instance', () => {
    const pipe = new AlumnosPipe();
    expect(pipe).toBeTruthy();
  });
});
