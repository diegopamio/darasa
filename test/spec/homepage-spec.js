var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var i18n = require('i18n');

chai.use(chaiAsPromised);
var expect = chai.expect;

i18n.configure({
    locales:['en', 'es'],
    defaultLocale: 'es',
    directory: './config/locales'
});

describe('La home page', function() {
    before(function(){
        browser.get('/');
    });

    describe('debería tener un botón para crear un nuevo item que', function(){
        it('exista', function() {
            expect(element(by.id('shareItem')).isPresent()).to.eventually.be.true
        });
        it('se llame "' + i18n.__('Add New Item') + '"', function(){
            expect(element(by.id('shareItem')).getText()).to.eventually.equal(i18n.__('Add New Item'))
        });
    })

    it('debería tener un título para saber de qué se trata:', function() {
        expect(element(by.id('titleLabel')).isPresent()).to.eventually.be.true
    });

    it('debería tener un "About" para poder saber quién la hizo', function() {
        expect(element(by.id('aboutButton')).isPresent()).to.eventually.be.true
    });

    it('debería tener un botón de "Home" para poder volver al inicio facilmente', function() {
        expect(element(by.id('aboutButton')).isPresent()).to.eventually.be.true
    });

});