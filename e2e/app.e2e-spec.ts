import { SubjectPage } from './app.po';

describe('subject App', () => {
  let page: SubjectPage;

  beforeEach(() => {
    page = new SubjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
