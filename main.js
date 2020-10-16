// export const makeSandwich = (proteinType, cheeseType, veggieType, breadType) => {
//   let sandwich = {
    
//   protein: proteinType, 
//   cheese: cheeseType, 
//   veggie: veggieType, 
//   bread: breadType
// }
// return sandwich
// }



export const makeSandwich = (proteinType, cheese, veggie, bread) => {
  let sandwich = {
    protein: proteinType, 
    cheese, 
    veggie, 
    bread
  }
 return sandwich
}

const hamOnRye = makeSandwich("ham", "swiss", "lettuce", "rye")
console.log(hamOnRye)