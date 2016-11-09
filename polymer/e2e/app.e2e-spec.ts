import { PolymerPage } from './app.po';

describe('polymer App', function() {
  let page: PolymerPage;

  beforeEach(() => {
    page = new PolymerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
