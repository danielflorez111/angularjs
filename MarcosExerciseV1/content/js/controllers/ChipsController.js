function ChipsController ($timeout, $q) {

    this.names = [
      {
        'name' : 'Ayrton'
      },
      {
        'name' : 'Marcos'
      },
      {
        'name' : 'Mateo'
      },
      {
        'name' : 'Daniel'
      }
    ];

    this.addName = function(chip) {
      return {
        name: chip
      };
    };
  }

angular
    .module("app")
    .controller("ChipsController", ChipsController);

