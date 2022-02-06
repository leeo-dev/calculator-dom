import CalcController from "./controller/calc-controller.js"
let calculator = new CalcController()
const today = new Date()
calculator.currentDate = today.getFullYear() 
console.log(calculator.currentDate)
