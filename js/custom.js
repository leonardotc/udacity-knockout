var initialCats = [
  {
    name: "firi",
    clickCount: 0,
    source: "https://s-media-cache-ak0.pinimg.com/736x/b1/fc/c8/b1fcc81d4d1dffc4f4c0e2dd22a3112e.jpg",
    nicknames: [
      { nickname: 'Bristol' },
      { nickname: 'Marcon' },
      { nickname: 'Milton' }
    ]
  },
  {
    name: "doris",
    clickCount: 0,
    source: "http://a-z-animals.com/media/animals/images/470x370/siamese3.jpg",
    nicknames: [
      { nickname: 'Doreta' },
      { nickname: 'Fuba' },
      { nickname: 'gata' }
    ]
  },
  {
    name: "persephone",
    clickCount: 0,
    source: "https://igcdn-photos-c-a.akamaihd.net/hphotos-ak-xfp1/t51.2885-15/e35/13320036_569089999917346_1175110563_n.jpg?ig_cache_key=MTI2MjIzNTkxNzc0ODI2MzYwMg%3D%3D.2",
    nicknames: [
      { nickname: 'Cute lil Alien' },
      { nickname: 'Perper' },
      { nickname: 'Frosted Chicken' }
    ]
  }
];

var Cat = function(data) {
  var self = this;
  
  self.name = ko.observable(data.name);
  self.source = ko.observable(data.source);
  self.clickCount = ko.observable(data.clickCount);
  self.nicknames = ko.observableArray(data.nicknames);
  
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
  },self);
  
};

var ViewModel = function() {
  var self = this;
  
  self.catList = ko.observableArray([]);
  
  initialCats.forEach(function(catItem) {
    self.catList().push(new Cat(catItem));
  });
  
  self.currentCat = ko.observable(self.catList()[0]);
 
  this.incrementCounter = function() { 
    self.currentCat().clickCount( self.currentCat().clickCount() + 1 ); 
  };

  this.selectCat = function(obj) {
    self.currentCat(obj);
  }
  
};

ko.applyBindings(new ViewModel());