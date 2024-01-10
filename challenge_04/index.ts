const inputNumber01 = document.querySelector('input#number01') as HTMLInputElement
const inputNumber02 = document.querySelector('input#number02') as HTMLInputElement

const spanResult = document.querySelector('span#result') as HTMLSpanElement

interface Operations {
  [x: string]: (a: number, b: number) => number
}

const operations: Operations = {
  sum: (a, b) => a + b,
  subtraction: (a, b) => a - b,
  multiplication: (a, b) => a * b,
  division: (a, b) => a / b,
  rest: (a, b) => a % b,
}

const buttons = Object.keys(operations).map(operation => document.querySelector(`button#${operation}`)) as HTMLButtonElement[]

buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    const target = event.target as HTMLButtonElement

    if(!target || !spanResult || !inputNumber01 || !inputNumber02)
      return

    if(inputNumber01.type !== 'number' || inputNumber02.type !== 'number') {
      alert('Você modificou o tipo de algum input.')
      window.location.reload()
      return
    }

    if(invalidInput(inputNumber01) || invalidInput(inputNumber02))
      return

    const number01 = transformToNumber(inputNumber01.value)
    const number02 = transformToNumber(inputNumber02.value)

    const result = operations[target.id](number01, number02)
    console.log({ result, number01, number02 })
    spanResult.innerText = String(result)

    if (number02 === 0 && ['division', 'rest'].includes(target.id))
      spanResult.innerText = 'Divided by zero'
  })
})

function invalidInput(element: HTMLInputElement) {
  return element.validity.badInput
}

function transformToNumber(text: string): number {
  return parseFloat(text) || 0
}

document.querySelector('form')?.addEventListener('submit', event => event.preventDefault())