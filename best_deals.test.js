describe("bestDeals", function() {
  it("should return the list split out the quantity and the price", function() {
    var listOfDeals = allDeals("1 for R3, 2 for R7, 3 for R10, 5 for R14.50.");
    assert.equal(bestDeals(4), listOfDeals);
  })
})
