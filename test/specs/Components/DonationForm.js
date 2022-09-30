describe("Test Scenario 1", async () => {
  // Test Case 1
  it("Find Submit button and asert to be clickable", async () => {
    await browser.url("https://ccss-demo.interaktiv.sg/donate");

    const donateButton = await $('//button[@type="Submit"]');
    await expect(donateButton).toBeClickable();
  });
});
