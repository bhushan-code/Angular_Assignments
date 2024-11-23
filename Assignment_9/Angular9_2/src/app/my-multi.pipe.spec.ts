import { MyMultiPipe } from './my-multi.pipe';

describe('MyMultiPipe', () => {
  it('create an instance', () => {
    const pipe = new MyMultiPipe();
    expect(pipe).toBeTruthy();
  });
});
