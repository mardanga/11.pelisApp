import { PelisAppPage } from './app.po';

describe('pelis-app App', () => {
  let page: PelisAppPage;

  beforeEach(() => {
    page = new PelisAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
