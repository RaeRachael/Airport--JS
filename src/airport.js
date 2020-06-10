class Airport{

  constructor() {
    this.DEFUALT_CAPACITY = 100
    this._hanger = []
  };

  planes() {
    return this._hanger;
  };

  landingOk(plane) {
    if (this.isFull()) { return }
    this._hanger.push(plane);
  };

  takeoffOk(plane) {
    var hanger = this._hanger
    for( var i = 0; i < hanger.length; i++) {
      if ( hanger[i] === plane) { this._hanger.splice(i, 1); }
    }
  };

  isFull() {
    if (this._hanger.length === 100) {return true };
    return false;
  };

};
