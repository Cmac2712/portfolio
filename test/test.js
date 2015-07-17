
describe('Home page', function() {  
  before(function() {
     casper.start(‘http://localhost:8000’);
  });

  it(‘should have an element in DOM’, function(){
    casper.waitForSelector(‘#correctElement’, function() {
        ‘#correctElement’.should.be.inDOM;
    });
   });


});
