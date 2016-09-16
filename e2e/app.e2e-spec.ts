import { AjaxNg2Page } from './app.po';

describe('ajax-ng2 App', function() {
  let page: AjaxNg2Page;

  beforeEach(() => {
    page = new AjaxNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
