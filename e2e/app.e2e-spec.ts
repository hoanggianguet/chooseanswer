import { ChooseanswerPage } from './app.po';

describe('chooseanswer App', function() {
  let page: ChooseanswerPage;

  beforeEach(() => {
    page = new ChooseanswerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
