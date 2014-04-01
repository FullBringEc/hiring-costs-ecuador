'use strict';

describe('Service: Salarycostservice', function () {

  // load the service's module
  beforeEach(module('hiringCostsEcuadorApp'));

  // instantiate service
  var Salarycostservice;
  beforeEach(inject(function (_SalaryCostService_) {
    Salarycostservice = _SalaryCostService_;
  }));

  it('should calculate a list of concepts from a salary', function () {
    expect(!!Salarycostservice).toBe(true);
    var concepts = Salarycostservice.calculate(340);
    expect(concepts.length).toBe(11);
  });

});
