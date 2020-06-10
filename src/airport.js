class Airport{

  constructor() {
    this._hanger = []
  }

  planes() {
    return this._hanger;
  }

  landingOk(plane) {
    this._hanger.push(plane);
  };

  takeoffOk(plane) {
    var hanger = this._hanger
    for( var i = 0; i < hanger.length; i++) {
      if ( hanger[i] === plane) { this._hanger.splice(i, 1); }
    }
  }

};
