'use strict';

describe('Service: Salarycostservice', function () {

  // load the service's module
  beforeEach(module('hiringCostsEcuadorApp'));

  // instantiate service
  var Salarycostservice;
  beforeEach(inject(function (_Salarycostservice_) {
    Salarycostservice = _Salarycostservice_;
  }));

  it('should calculate a list of concepts from a salary', function () {
    expect(Salarycostservice.calculate(340)).toBe([
    ]);
  });

});
