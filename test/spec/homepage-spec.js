var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

describe('La home page', function() {
    it('debería tener un botón de "Compartir Item"', function() {
        browser.get('/');

        var mensaje = element(by.id('shareItem'));

        expect(mensaje.getText()).to.eventually.equal("Add New Item")
    });
});