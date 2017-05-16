function ChipsController ($timeout, $q) {

    this.names = [];
    this.selectNames = [];
    this.listNames = [];
    this.requireMatch = true; 

    this.addName = function(chip) {
        this.names.push(chip);      
    };

    this.createSelect = function() {
        angular.copy(this.names, this.selectNames)
    };

    this.addToList = function() {
        this.listNames.indexOf(this.name) === -1 ? this.listNames.push(this.name) : 0;
        var index = this.selectNames.indexOf(this.name);
        if(index != -1) {
            this.selectNames.splice(index, 1 );
        }  
    };

    this.removeFromList = function(name){
        this.selectNames.indexOf(name) === -1 ? this.selectNames.push(name) : 0;
        var index = this.listNames.indexOf(name);  
        if(index != -1) {
            this.listNames.splice(index, 1 );
        }              
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

