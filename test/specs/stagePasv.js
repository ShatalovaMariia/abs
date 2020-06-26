import {expect} from 'chai';
 // import login from './stageLogin'
 // const login = require('./stageLogin')
//
function login(){
    browser.maximizeWindow()
    browser.url('https://stage.pasv.us/user/login')
    $('[name="email"]').setValue('lutka@yahoo.com')
    $('[name="password"]').setValue('lutka')
    $('[type="submit"]').click()
}

describe('Edit profile',() =>{
    before( ()=>{
        login()
        // $('[class="dropdown-toggle nav-link"]').click()
        // $('//button[text()="Settings"]').click()
    })

    // it('should ', function () {
    //     $('[name="tShirtSize"]').selectByVisibleText('Men/Unisex - S');
    //
    // });

    it('should open diary report', function () {
        $('[qa="diary-link"]').click()
        $('[qa="create-day-report-button"]').click()
       expect($('//h1').getText()).eq('Create day report')
    });

    it('should verufy button is not clickable', function () {
        expect($('[type="submit"]').isClickable()).false;
    });

    it('should Marks to your  report ', function () {
        for(let i = 0; i < 12; i++){
            $(`[id="input-${i}"]`).click();
            expect($(`[id="input-${i}"]`).isSelected()).true;
        }
    });

    it('should choose What is your morale?', function () {
    $('[name="morale"]').selectByVisibleText(8)

    });
    it('should ', function () {
        $('[name="hours"]').setValue(10)
        browser.pause(2000)
    });

    it('should ', function () {
        $('[name="description"]').setValue('qweigfliYGFIUWEGYFIUgflGAUFIGILeiwuafg;OEUGFH;oweigf')
    });

    it('should verufy button is clickable', function () {
        expect($('[type="submit"]').isClickable()).true;
    });

    it('should verufy button is clickable', function () {
        expect($('[type="submit"]').isClickable()).true;
    });

    it('click button save', function () {
        $('[type="submit"]').click();
        browser.pause(2000)
    });



})