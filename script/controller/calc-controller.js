export default class CalcController{
  #displayCalc
  #currentDate
  #currentHouse
  #displayCalcEl
  #hourEl
  #dateEl
  constructor(){
    this.#displayCalc = 0
    this.#displayCalcEl = document.querySelector('#display')
    this.#hourEl = document.querySelector('#hour')
    this.#dateEl = document.querySelector('#date')
    this.#initialize()
  }

  #initialize(){
    this.#displayDateAndHour()
    setInterval(()=> this.#displayDateAndHour(), 1000)
  }

  #displayDateAndHour(){
    this.#currentDate = new Date().toLocaleDateString('pt-BR', {day: '2-digit', month: 'long', year: 'numeric'}) 
    this.#currentHouse = new Date().toLocaleTimeString()
    this.#hourEl.innerHTML = this.#currentHouse
    this.#dateEl.innerHTML =  this.#currentDate
  }

  get displayCalc(){
    return this.#displayCalc
  }

  set setHour(value){
    this.#hourEl = value
  }
  get setHour(){
    return this.#hourEl.innerHTML
  }

  set setDate(value){
    this.#dateEl = value
  }
  get setDate(){
    return this.#dateEl.innerHTML
  }

  set displayCalc(value){
    this.#displayCalc = value
  }
  get currentDate(){
    return this.#currentDate
  }
  set currentDate(value){
    this.#currentDate = value
  }
}