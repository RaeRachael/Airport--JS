describe('Airport', function(){

  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpyObj('plane',['landAt']);
  });

  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });

  it('can land planes', function(){
    airport.landingOk(plane);
    expect(airport.planes()).toEqual([plane]);
  });

});
