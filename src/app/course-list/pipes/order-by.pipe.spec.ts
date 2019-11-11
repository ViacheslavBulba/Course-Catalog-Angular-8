import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByPipe();
    expect(pipe).toBeTruthy();
  });

  it('orders array by creation date desc', () => {
    const pipe = new OrderByPipe();
    const beforeOrdering = [
      {
        title: 'course #2',
        creationDate: new Date('November 1 2019')
      },
      {
        title: 'course #1',
        creationDate: new Date('December 11 2019')
      },
      {
        title: 'course #3',
        creationDate: new Date('October 13 2019')
      }
    ];
    const afterOrdering = [
      {
        title: 'course #1',
        creationDate: new Date('December 11 2019')
      },
      {
        title: 'course #2',
        creationDate: new Date('November 1 2019')
      },
      {
        title: 'course #3',
        creationDate: new Date('October 13 2019')
      }
    ];
    expect(pipe.transform(beforeOrdering, '-creationDate')).toEqual(afterOrdering);
  });

});
