import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('filters array by title', () => {
    const pipe = new FilterPipe();
    const beforeFiltering = [
      {
        title: 'aaa',
        creationDate: new Date('November 1 2019')
      },
      {
        title: 'bbb',
        creationDate: new Date('December 11 2019')
      },
      {
        title: 'ccc',
        creationDate: new Date('October 13 2019')
      }
    ];
    const afterFiltering = [
      {
        title: 'bbb',
        creationDate: new Date('December 11 2019')
      }
    ];
    expect(pipe.transform(beforeFiltering, 'bbb')).toEqual(afterFiltering);
  });

});
