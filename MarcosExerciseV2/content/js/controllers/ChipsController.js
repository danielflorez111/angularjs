function ChipsController ($timeout, $q) {

    this.names = [];
    this.requireMatch = true; 

    this.addName = function(chip) {
        this.names.push(chip);      
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

