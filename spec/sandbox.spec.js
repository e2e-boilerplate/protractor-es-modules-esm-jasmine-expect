describe("Sandbox", () => {
  beforeAll(() => {
    browser.get("https://e2e-boilerplate.github.io/sandbox/");
  });

  it("should be on Sandbox", async () => {
    const title = await browser.getTitle();
    const header = element(by.css("h1"));

    expect(title).toEqual("Sandbox");
    expect(header.getText()).toEqual("Sandbox");
  });
});
