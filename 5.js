class KitchenAppliances{
    constructor(name, power){
        this.name = name,
        this.power = power,
        this.on = false
    }
    onoff = function(){
    if(this.on == false){
        Object.defineProperty(this, 'on', {value: true, configurable: true}, )
        return console.log(`${this.name} включён`)
    }
        else{
            Object.defineProperty(this, 'on', {value: false, configurable: true})
            return console.log(`${this.name} выключен`)
        }
    }
}


function sumPower(){
    let a = 0
        for (let x = 0; x < arguments.length; x++){
            if (arguments[x].on == true){
                a += arguments[x].power
            }
        }
        return console.log(`Суммарная мощность включённых приборов равна ${a}`)}

class CookingEquipment extends KitchenAppliances{
    constructor(a, name, height, width, depth, power, color){
        super(name, power)
        this.number_of_modes = a
        this.name = name,
        this.height = height,
        this.width = width,
        this.depth = depth,
        this.power = power,
        this.color = color
        this.cooking = function(){
            if (this.name == 'Тостер'){
                return console.log('За 5 минут этот тостер приготовит 3 тоста')
            } else {return console.log('Этот метод доступен только для тостера!')}
        }
    }
}

class StorageEquipment extends KitchenAppliances{
    constructor(n, name, height, width, depth, power, color){
        super(name, power)
        this.number_of_shelves = n
        this.name = name,
        this.height = height,
        this.width = width,
        this.depth = depth,
        this.power = power,
        this.color = color
    }
}


const toaster = new CookingEquipment(5, 'Тостер',50,50,50,60,'black')
const teapot = new CookingEquipment(3, 'Чайник',60,60, 30, 70,'blue')
const microwave = new CookingEquipment(10, 'Микроволновка', 80, 70, 90, 100,'grey')
const fridge = new StorageEquipment(8, 'Холодильник',150,90,100,500,'green')

toaster.onoff()
teapot.onoff()
microwave.onoff()
fridge.onoff()

sumPower(toaster, teapot, microwave, fridge)

fridge.onoff()

sumPower(toaster, teapot, microwave, fridge)

console.log(teapot.cooking())