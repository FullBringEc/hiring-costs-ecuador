'use strict';

describe('Service: MinimumSalary', function () {

  // load the service's module
  beforeEach(module('hiringCostsEcuadorApp'));

  // instantiate service
  var MinimumSalary;
  beforeEach(inject(function (_MinimumSalary_) {
    MinimumSalary = _MinimumSalary_;
  }));

  it('should do something', function () {
    expect(!!MinimumSalary).toBe(true);
    expect(MinimumSalary).toBe(340);
  });

});
