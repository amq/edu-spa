import { EduSpaPage } from './app.po';

describe('edu-spa App', () => {
  let page: EduSpaPage;

  beforeEach(() => {
    page = new EduSpaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
