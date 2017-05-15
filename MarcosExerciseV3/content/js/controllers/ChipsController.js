function ChipsController ($timeout, $q) {

    this.names = [];
    this.selectNames = [];
    this.requireMatch = true; 

    this.addName = function(chip) {
        this.names.push(chip);      
    };

    this.createSelect = function() {
        angular.copy(this.names, this.selectNames)
    };

    this.printSelectedName = function() {
        console.log(this.name)
    };

    this.querySearch = function(searchText) {
        var results = ["Ayrton", "Daniel", "Marcos", "Mateo"];

        if(searchText) {
            return results.filter(function(name){
                return name.indexOf(searchText) === 0;                
            });                                    
        } else {
            return results;
        }
    };
  }

angular
    .module("app")
    .controller("ChipsController", ChipsController);

