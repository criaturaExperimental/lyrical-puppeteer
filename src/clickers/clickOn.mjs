export async function clickLink(page, xPathSelector) {
  await page.waitForSelector('.search_results_label'); // todo review this selector
  const linkHandlers = await page.$x(xPathSelector);
  if (linkHandlers.length > 0) {
    await linkHandlers[0].click();
  } else {
    throw new Error("Link not found");
  }
}