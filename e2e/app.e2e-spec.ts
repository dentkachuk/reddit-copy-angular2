import { RedditCopyAngular2Page } from './app.po';

describe('reddit-copy-angular2 App', function() {
  let page: RedditCopyAngular2Page;

  beforeEach(() => {
    page = new RedditCopyAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
