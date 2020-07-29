import $ from 'blingblingjs'

const $demo = $('section')

const state = {
  transition: 'in:circle:top-left'
}

const update = transition => {
  state.transition = transition
  $demo.attr('transition', transition)
  copyToClipboard(transition)
}

const copyToClipboard = text => {
  if (!navigator.clipboard) return

  try {
    navigator.clipboard.writeText(text)
  } 
  catch (err) {
    console.error('Failed to copy: ', err)
  }
}

$('body').on('click', e => {
  update(state.transition)
})

$('dd').on('click', e => {
  let transition = e.target.textContent
  update(transition)
})

$('select').on('change', e => {
  let transition = e.target.options[e.target.selectedIndex].text
  update(transition)
})

$demo.on('animationend', e => {
  $demo.attr('transition', '')
})