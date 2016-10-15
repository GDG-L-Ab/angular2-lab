import { Angular2LabPage } from './app.po';

describe('angular2-lab App', function() {
  let page: Angular2LabPage;

  beforeEach(() => {
    page = new Angular2LabPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
