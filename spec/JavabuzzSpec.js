describe('Javabuzz', function() {
  var javabuzz;

  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  describe('knows when a number is', function() {
    it(' is divisible by 15', function() {
      expect(javabuzz.isDivisibleByFifteen(15)).toBe(true);
    });
  });


describe('knows when a number is NOT', function(){
  it(' is divisible by 15', function(){
    expect(javabuzz.isDivisibleByFifteen(1)).toBe(false);
  });
});

describe('knows when a number is', function() {
  it(' is divisible by 5', function() {
    expect(javabuzz.isDivisibleByFive(5)).toBe(true);
  });
});


describe('knows when a number is NOT', function(){
it(' is divisible by 5', function(){
  expect(javabuzz.isDivisibleByFive(1)).toBe(false);
});
});

describe('knows when a number is', function() {
  it(' is divisible by 3', function() {
    expect(javabuzz.isDivisibleByThree(3)).toBe(true);
  });
});


describe('knows when a number is NOT', function(){
it(' is divisible by 3', function(){
  expect(javabuzz.isDivisibleByThree(1)).toBe(false);
});
});

describe('when saying, says', function(){
  it("'Javabuzz' when a number is divisble by 15", function(){
    expect(javabuzz.says(15)).toEqual('Javabuzz');
  });
});

describe('when saying, says', function(){
  it("'buzz' when a number is divisble by 5", function(){
    expect(javabuzz.says(5)).toEqual('Buzz');
  });
});

describe('when saying, says', function(){
  it("'java' when a number is divisble by 3", function(){
    expect(javabuzz.says(3)).toEqual('Java');
  });
});

describe('when saying, says', function(){
  it("'java' when a number is divisble by 3", function(){
    expect(javabuzz.says(3)).toEqual('Java');
  });
});




});
