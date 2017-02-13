function Laptop(brand, model, cost, volume, os){
    this.brand = brand;
    this.model = model;
    this.cost = cost;
    this.volume = volume;
    this.os = os;
}


Laptop.prototype = {
  hardDrive: function(){
    if (this.brand === "Dell"){
      return this.brand + ' ' + "Low Spec for coding!";
    }
    
    else {
      return this.brand + ' ' + "High spec for coding!";
    }
    
  },
  
  appDownload: function(utility){
    if (this.brand === "Macbook"){
      return "Visit the MacOsx App store to download the " + utility + ' ' +"utility.";
    }
    
    if (this.brand === "Dell"){
      return "Visit any windows Software site to download the " + utility + ' ' + "utility.";
    }
    
    else {
      return "Visit a physical software store to buy the " + utility + ' ' + "utility.";
    }
  }
  
};

var dell = new Laptop("Dell", "inspiron", "$60", 80, "Windows Xp");
var macbook = new Laptop("Mac", "pro", "$900", 500, "osx");
var hp = new Laptop("Hp", "G71", "$180", 250, "Windows Vista");
var microsoft = new Laptop("Ms", "surface", "$1400", 1000, "Windows 10");



console.log(dell.appDownload("notepad++"));
console.log(macbook.appDownload("swift"));
console.log(hp.appDownload("sublime text"));
console.log(microsoft.appDownload("Visual Studio"))

