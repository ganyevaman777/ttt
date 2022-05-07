const a = "a" //string

const b = 20 //number

const bool = true; //boolean

const bool2 = false;

// console.log(typeof bool)

const obj = {
    key: "value",
    username: "Alex",
    data: {
        first_name: "Jack",
        last_name: "Barbaro"
    }
}

//console.log(obj.data.first_name)
//console.log(obj.data)

const arr = []

//console.log(arr[1})

const arr2 = [
    {
      key: "value"
    },
    {
      key: "value"
    },
    {
      key: "value3"
    }
]
//console.log(arr2[2].key)

//const name = alert("Вам запрещено")
//console.log("Hello " + name)

const first_name = prompt("Введите число")
const last_name = prompt("Введите второе число")

if(first_name > last_name){
    console.log(first_name + ">" + last_name)
}
else if(first_name > last_name){
    console.log(first_name + "<" + last_name)
}
else{
    console.log(first_name + "=" + last_name)
}
