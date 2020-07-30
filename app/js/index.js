import $ from 'blingblingjs'

const $demo = $('section')

const [selected] = $('dd').filter(d => 
  d.textContent === 'in:circle:top-left')

const state = {
  transition: 'in:circle:top-left',
  selected,
}

const update = transition => {
  state.transition = transition
  $demo.attr('transition', transition)
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

$demo.on('click', e => {
  update(state.transition)
})

$('dd').on('click', e => {
  let transition = e.currentTarget.textContent

  state.selected.removeAttribute('selected')
  e.currentTarget.setAttribute('selected', true)
  state.selected = e.currentTarget

  update(transition)
  copyToClipboard(transition)
})

$('select').on('change', e => {
  let transition = e.target.options[e.target.selectedIndex].text
  update(transition)
})

$demo.on('animationend', e => {
  $demo.attr('transition', '')
})