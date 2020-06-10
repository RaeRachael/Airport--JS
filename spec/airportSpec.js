describe('Airport', function(){

  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['landAt', 'takeoffFrom']);
  });

  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });

  it('can land planes', function(){
    airport.landingOk(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  it('can depart planes', function(){
    airport.landingOk(plane);
    console.log('ok1')
    airport.takeoffOk(plane);
    console.log('ok2')
    expect(airport.planes()).toEqual([]);
    console.log('ok3')
  });

});
