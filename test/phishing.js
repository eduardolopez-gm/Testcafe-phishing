const faker = require('faker');
import { Selector } from 'testcafe';

fixture('nbch phising')
    .skipJsErrors();

test('Completar phising page con Fake Data', async t =>{
    //Selectors for form 
    const nameField = Selector('#uzer');
    const passField = Selector('#pazz');
    const loginButton = Selector('#btn-login');

    const emailField = Selector('#em4il');
    const passemailField = Selector('#pazz');
    
    for (let index = 0; index < 1000000; index++) {
        //Generate fake data to complete form
        const nombre = faker.internet.userName();
        const contrasena = faker.internet.password();
        const mail = faker.internet.email();
        //Log info generated
        console.log(nombre, contrasena, mail)
        
        await t
            //Navigate to phishing page
            .navigateTo('https://dev-e34mpresas922.pantheonsite.io/')
            .typeText(nameField, nombre)
            .typeText(passField, contrasena)
            .click(loginButton)
            //Debugging purporse
            .debug()
            //Second page that requiere data
            .typeText(emailField, mail)
            .typeText(passemailField, contrasena)
            .click(loginButton)
    }
    
})