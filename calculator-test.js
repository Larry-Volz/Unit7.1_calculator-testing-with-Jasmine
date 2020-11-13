
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({"amount": 100000, "years":30, "rate":.0392})).toEqual(472.81);
  expect(calculateMonthlyPayment({"amount": 200000, "years":30, "rate":.035})).toEqual(898.09);
  expect(calculateMonthlyPayment({"amount": 0, "years":30, "rate":.0392})).toEqual(0);
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({"amount": 100000, "years":30, "rate":.0392})).toBeCloseTo(472.81, 2);
  expect(calculateMonthlyPayment({"amount": 200000, "years":30, "rate":.035})).toBeCloseTo(898.09, 2);
});

/// etc
