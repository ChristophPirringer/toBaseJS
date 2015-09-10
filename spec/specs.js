describe('toBase', function() {

  it("transforms a number to its binary value (2-base)", function() {
   expect(toBase.binary(156)).to.equal(10011100);
  });

  it("transforms a number to its trinary value (3-base)", function() {
   expect(toBase.trinary(156)).to.equal(12210);
  });

  it("transforms a number to its nonary value (9-base)", function() {
   expect(toBase.nonary(156)).to.equal(183);
  });




  it("transforms 156 to its binary value given 2 as a base", function() {
   expect(toBase.omniary(156, 2)).to.equal(10011100);
  });

  it("transforms 156 to its trinary value given 3 as a base", function() {
   expect(toBase.omniary(156, 3)).to.equal(12210);
  });

  it("transforms 156 to its nonary value given 9 as a base", function() {
   expect(toBase.omniary(156, 9)).to.equal(183);
  });

  it("transforms 156 to its septuary value gien 7 as a base", function() {
   expect(toBase.omniary(156, 7)).to.equal(312);
  });

});
