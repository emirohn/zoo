var allAnimals = [];
var animalPopulation = 0;

function run(){
    var tigger = new Tiger("Tigger", "pizza");
    var pooh = new Bear("Pooh", "fish");
    var rarity = new Unicorn("Rarity", "marshmallows");
    var gemma = new Giraffe("Gemma", "leaves");
    var stinger = new Bee("Stinger", "pollen");
    listAnimal();
}

class Animal {
    constructor(name, favoriteFood){
        this.name = name;
        this.favoriteFood = favoriteFood;
        animalPopulation++;
        allAnimals.push(this);
    }

    sleep(){
        var sleepText = (this.name + " sleeps for 8 hours");
        $("#animalUpdatesText").append(sleepText);
        $("#animalUpdatesText").append("<br>");
    }

    eat(food){
        var eatsFood = this.name + " eats " + food;
        $("#animalUpdatesText").append(eatsFood);
        $("#animalUpdatesText").append("<br>");
        if(food == this.favoriteFood){
            var favFood = "YUM! " + this.name + " wants more " + food;
            $("#animalUpdatesText").append(favFood);
            $("#animalUpdatesText").append("<br>");
        }else{
            this.sleep();
        }
    }
}

class Tiger extends Animal{
    constructor(name, food) {
        super(name, food);
    }
}

class Bear extends Animal{
    constructor(name, food) {
        super(name, food);
    }

    sleep(){
        $("#animalUpdatesText").append(this.name + " hibernates for 4 hours");
        $("#animalUpdatesText").append("<br>");
    }
}

class Unicorn extends Animal {
    constructor(name, food){
        super(name, food);
    }

    sleep(){
        $("#animalUpdatesText").append(this.name + " sleeps in a cloud.");
        $("#animalUpdatesText").append("<br>");
    }
}

class Giraffe extends Animal {
    constructor(name, food) {
        super(name, food);
    }
    eat(food){
        if(food == this.favoriteFood){
            super.eat("leaves");
            this.sleep();
        }else{
            var eatsFood = ("YUCK!!! " + this.name + " will not eat " + food);
            $("#animalUpdatesText").append(eatsFood);
            $("#animalUpdatesText").append("<br>");

        }
    }

}

class Bee extends Animal {
    constructor(name, food){
        super(name, food);
    }

    eat(food){
        if(food == this.favoriteFood){
            $("#animalUpdatesText").append(this.name + " eats " + food);
            $("#animalUpdatesText").append("<br>");
            $("#animalUpdatesText").append("YUM! " + this.name + " wants more " + food);
            $("#animalUpdatesText").append("<br>");
            this.sleep();
        }else{
            $("#animalUpdatesText").append("YUCK!!! " + this.name + " will not eat " + food);
            $("#animalUpdatesText").append("<br>");
        }
    }

    sleep(){
        $("#animalUpdatesText").append(this.name + " never sleeps");
        $("#animalUpdatesText").append("<br>");
    }
}

function createAnimal(){
    var type = $('#animalType').val();
    var name = $('#name').val();
    var favoriteFood = $('#favoriteFood').val();
    var animal;

    switch(type){
        case "tiger":
            animal = new Tiger(name, favoriteFood);
            break;
        case 2:
            type = "bear";
            animal = new Bear(name, favoriteFood);
            break;
        case 3:
            type = "giraffe";
            animal = new Giraffe(name, favoriteFood);
            break;
        case 4:
            type = "unicorn";
            animal = new Unicorn(name, favoriteFood);
            break;
        case 4:
            type = "bee";
            animal = new Bee(name, favoriteFood);
            break;
    }
    listAnimal();

    console.log(allAnimals);

    $("#animalUpdatesText").append("A new animal named " + name + " was created");
    $("#animalUpdatesText").append("<br>");
}

function listAnimal(){
    var animalList = "";
    for(var i = 0; i < allAnimals.length; i++){
        animalList = animalList + " - " + allAnimals[i].name + ", the " + allAnimals[i].constructor.name + " who likes " + allAnimals[i].favoriteFood + "<br>";
    }
    $("#listOfAnimals").html(animalList);
}

function feedAnimals(){
    $("#animalUpdatesText").html(" ");

    var food = $('#selectFood').val();
    for(var i = 0; i < allAnimals.length; i++){
        allAnimals[i].eat(food);
    }
}

function renameAnimal(){
    var oldName = $('#oldName').val();
    var newName = $('#newName').val();
    for(var i = 0; i < allAnimals.length; i++){
        if(oldName == allAnimals[i].name){
            allAnimals[i].name = newName;
            updateText = oldName + " was renamed " + newName;
        }
    }
    listAnimal();

    $("#animalUpdatesText").append(updateText);
    $("#animalUpdatesText").append("<br>");
}

function removeAnimal(){
    var name = $('#removeName').val();
    for(var i = 0; i < allAnimals.length; i++){
        if(name == allAnimals[i].name){
            allAnimals.splice(i, 1);

            $("#animalUpdatesText").append(name + " was removed");
            $("#animalUpdatesText").append("<br>");
        }

    }
    listAnimal();

}