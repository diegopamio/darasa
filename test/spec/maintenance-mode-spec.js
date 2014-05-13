var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

describe('Maintenance Mode Page', function() {
    it('debería mostrar un cartel de "Vuelva Pronto"', function() {
        browser.get('http://127.0.0.1:8080');

        var mensaje = element(by.id('text'));

        expect(mensaje.getText()).to.eventually.equal("Sorry, we are maintaining the site right now, pleases go back in a couple of minutes.")
    });
});