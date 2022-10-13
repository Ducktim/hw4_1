
const input = document.querySelectorAll('.field');


export const getInputValue = () =>{ console.log(Array(input))
    return Array.prototype.slice.call(input).map((Item) =>{
        console.log(Item.value)
     return Item.value;
    })
}