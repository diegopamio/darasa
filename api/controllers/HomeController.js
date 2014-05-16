/**
 * HomeController
 *
 * @description :: Server-side logic for the home page
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    index: function(req, res){
        res.view('homepage')
    }
};

