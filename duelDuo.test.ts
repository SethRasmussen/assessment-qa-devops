
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Test the Draw button pulls up the choices', async () => {
    const drawBtn = await driver.findElement(By.id('draw'))
    drawBtn.click()
    await driver.sleep(2000)
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
})

test('Add to Duo button pulls up player-duo', async () => {
    const drawBtn = await driver.findElement(By.id('draw'))
    drawBtn.click()
    await driver.sleep(2000)
    const duoBtn = await driver.findElement(By.xpath('//*[@id="choices"]/div[3]/button'))
    duoBtn.click()
    await driver.sleep(2000)
    const playerDuo = await driver.findElement(By.id('player-duo'))
    const displayed = await playerDuo.isDisplayed()
    expect(displayed).toBe(true)
})