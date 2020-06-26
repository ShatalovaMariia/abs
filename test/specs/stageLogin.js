function login(){
    browser.maximizeWindow()
    browser.url('https://stage.pasv.us/user/login')
    $('[name="email"]').setValue('lutka@yahoo.com')
    $('[name="password"]').setValue('lutka')
    $('[type="submit"]').click()
}

module.exports = login();