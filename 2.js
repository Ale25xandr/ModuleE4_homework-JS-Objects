const obj_prot = {d: 4}

const obj = Object.create(obj_prot)

obj.a = 1
obj.b = 2

function func(obj, str){
    console.log(str in obj)
}


func(obj, 'e')