const { Builder } = require("selenium-webdriver");

async function runTest() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    // Construct the URL with credentials
    const protocol = "https://";
    const username = "storefront";
    const password = "storefront123";
    const url =
      "staging-na-wwwinc.demandware.net/s/wolverine_us/en/luton-waterproof-hiker/56469W.html?dwvar_56469W_color=W880385&ref=56469W#q=56469W&start=1";
    const authUrl = `${protocol}${username}:${password}@${url}`;

    // Navigate to the page
    await driver.get(authUrl);
    const widthButton = await driver.findElement(By.css("#swatch-width-M"));
    await widthButton.click();
    const size = await driver.findElement(By.css("#swatch-size-11"));
    await size.click();
    const addToCart = await driver.findElement(By.css("#add-to-cart"));
    await addToCart.click();
    // Now, you can interact with the page as usual
    // Example: Click a button if necessary
    // const button = await driver.findElement(By.id("some-button-id"));
    // await button.click();
  } finally {
    // await driver.quit();
  }
}

runTest();
