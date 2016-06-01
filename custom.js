var ViewModel = function() {
  var self = this;

  self.name = ko.observable("firi");
  self.source = ko.observable("https://s-media-cache-ak0.pinimg.com/736x/b1/fc/c8/b1fcc81d4d1dffc4f4c0e2dd22a3112e.jpg");
  self.clickCount = ko.observable(0);
  self.incrementCounter = function() { self.clickCount(self.clickCount() + 1); };
  self.nicknames = ko.observableArray([
    { nickname: 'Bristol' },
    { nickname: 'Marcon' },
    { nickname: 'Milton' }
  ]);
  self.level = ko.computed(function() {
    if (this.clickCount() < 10) {
      return "Newbie";
    }
    else if (this.clickCount() < 30) {
      return "Junior";
    }
    else if (this.clickCount() < 80) {
      return "Senior";
    }
    else {
      return "Pro";
    }
  },self)

}

ko.applyBindings(new ViewModel());