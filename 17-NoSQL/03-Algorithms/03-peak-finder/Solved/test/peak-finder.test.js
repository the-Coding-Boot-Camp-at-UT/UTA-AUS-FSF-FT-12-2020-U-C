var expect = chai.expect;

describe("peakFinder", function() {
  it(`should return 3 if given the array [3, 2, 1]`, function() {
    var arr = [3, 2, 1];

    var result = peakFinder(arr);

    expect(result).to.eql(3);
  });

  it(`should return 3 if given the array [2, 4, 6, 8, 10]`, function() {
    var arr = [2, 4, 6, 8, 10];

    var result = peakFinder(arr);

    expect(result).to.eql(10);
  });

  it(`should return 3 if given the array [4]`, function() {
    var arr = [4];

    var result = peakFinder(arr);

    expect(result).to.eql(4);
  });

  it(`should return 13 if given the array [-3, 2, 4, 7, 9, 13, 11, 8, 7, 3, 1]`, function() {
    var arr = [-3, 2, 4, 7, 9, 13, 11, 8, 7, 3, 1];

    var result = peakFinder(arr);

    expect(result).to.eql(13);
  });

  it(`should return 1 if given the array [-3, -2, -1, 0, 1, -9, -11, -18, -70]`, function() {
    var arr = [-3, -2, -1, 0, 1, -9, -11, -18, -70];

    var result = peakFinder(arr);

    expect(result).to.eql(1);
  });

});
