var allCars={
    cars:[],
    addnewCar:function(type, price){
            this.cars.push({
                type:type,
                rental:price,
                available:true
                });
            },
    availableCars:function(type){
        var count=0;
        for (var i=0; i<this.cars.length;i++){
            if (this.cars[i].type==type&&this.cars[i].available){
                count++;
            }
            
        }
        console.log(count);
    },
    requestRental:function(type){
        if (this.availableCars(type)==0){
            console.log("no car of that type available at the moment");
        }else{
            for (var i=0; i<this.cars.length;i++){
                if (this.cars[i].type==type&&this.cars[i].available){
                    console.log("This will cost: "+this.cars[i].rental+"$");
                    this.cars[i].available=!this.cars[i].available;
                    return;
            }
        }
        }
    }
};

// allCars.addnewCar("SUV",100);
// allCars.addnewCar("Sports", 200);
// allCars.addnewCar("Sports", 300);
// allCars.addnewCar("Sports",400);
// allCars.availableCars("Sports");
// allCars.requestRental("Sports");
// allCars.availableCars("Sports");