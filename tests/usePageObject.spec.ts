import {test, expect} from '@playwright/test'
import {NavigationPage} fom '../page-objects/navigationPage'

test.beforeEach(asyns({page}) => {
    
    await page.goto ('https://webdriveruniversity.com/')
)}

test('navigate to form page, async({page}) => {

    const navigateTo = new NavigationPage(page)
    navigate
}

)