const {Builder, Browser, By, Key, Until, withTagName}= require('selenium-webdriver');
(async function helloHeroku(){
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  let dri1= await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await dri1.get("https://app.shoutl.com/signin")
    await dri1.sleep(3000);
    console.log("shoutl fetched passed");
    // const element = await dri1.findElement(By.css('span[class="text-sm font-semibold leading-6"]'))  // sso signin

    // -- signin below
    await dri1.findElement(By.id("email")).clear();
    await dri1.findElement(By.id("email")).sendKeys("pranjal.p+Admin@paytunes.in");
    console.log("email entered successfully passed");
    await dri1.findElement(By.id("password")).clear();
    await dri1.findElement(By.id("password")).sendKeys("User@123")
    console.log("password entered successfully passed");
    // let err2 = await dri1.findElement(By.css('div["E-mail is not verified."]'))
      
    const element = await dri1.findElement(By.css('button[class = "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"]'));
    console.log("Signin button found and clicked successfully");
    await element.click()
    await dri1.sleep(2000);
    
    let err2 = await dri1.findElement(By.xpath("//div[contains(text(), 'E-mail is not verified.')]"))
    let errText = await err2.getText()
    console.log(errText);

    if(err2){
      console.log("Go and verify the email first");
      alert("Verify email ");
    }
       

    let err= await dri1.findElement(By.css('p[class="text-center text-sm font-medium text-red-500 mt-1"]'));

    if(err){
    let signup=  await dri1.findElement(By.css('a[href="/signup"]'));
    await signup.click();
    await dri1.sleep(7000);
    await dri1.findElement(By.id("name")).clear();
    await dri1.findElement(By.id("name")).sendKeys("Pranjal Pathak");
    console.log("name : Pranjal Pathak entered successfully");
    await dri1.findElement(By.id("email")).clear();
    await dri1.findElement(By.id("email")).sendKeys("pranjal.p+Admin@paytunes.in");
    console.log("email : pranjal.p@paytunes.in entered successfully");
    await dri1.findElement(By.id("password1")).clear();
    await dri1.findElement(By.id("password1")).sendKeys("User@123");
    console.log("password : User@123 entered successfully");
    await dri1.findElement(By.id("password2")).clear();
    await dri1.findElement(By.id("password2")).sendKeys("User@123");
    console.log("Confirm password: User@123 entered successfully");
    const signUpelement = await dri1.findElement(By.css('button[class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"]'));
    console.log("signup button found ");
    await signUpelement.click();
    console.log("signup button clicked")
    await dri1.sleep(3000);

    }
    
  } catch (error) {
    console.log("error for shoutl = "+error)
  }finally{
           await dri1.quit()
  }



  try {
    await driver.get("https://the-internet.herokuapp.com/");
    await driver.sleep(3000);
    console.log("passed website fetching");
    let ele= await driver.findElement(By.css('a[href="http://elementalselenium.com/"]'));
    // await driver.execute_script("arguments[0].scrollIntoView(true)",ele);
    // await driver.navigate().to("http://elementalselenium.com/");
    await driver.actions().move({origin:ele}).perform();
    // await driver.navigate().to(ele);    
    await driver.sleep(2000);
    console.log("navigation successful");

    // let ele1= await driver.findElement(By.css(''))

    await driver.sleep(4000);
    
    await ele.click()
    await driver.sleep(2000);
    console.log("passed on click on "+ele)
   
  } catch (error) {
    console.log("the error occurred = "+error);
  }finally{
   await driver.quit();
  }    
})();