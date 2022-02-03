let h1Element = document.querySelector('h1')
const inputElement = document.getElementById('Input')
const btn = document.getElementById('submit-button')
const ul = document.getElementById('todo-list')
const resetBtn =document.getElementById('reset-button')

btn.addEventListener('click',function(evt){
    const newLi = document.createElement('li')
    const inp = document.querySelector('Input')
    newLi.textContent = inp.value
  if (inp.value !== "") {  document.querySelector('ul').appendChild(newLi)
  inp.value = null
}

resetBtn.addEventListener('click',function(evt){
    newLi.textContent=' '
})
})  


console.log(resetBtn) 