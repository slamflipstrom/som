import { SomersetPage } from './app.po';

describe('somerset App', function() {
  let page: SomersetPage;

  beforeEach(() => {
    page = new SomersetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
