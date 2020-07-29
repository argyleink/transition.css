import $ from 'blingblingjs'

const $demo = $('section')

$('dd').on('click', e => {
  let transition = e.target.textContent
  $demo.attr('transition', transition)
  copyToClipboard(transition)
})

$('select').on('change', e => {
  let transition = e.target.options[e.target.selectedIndex].text
  $demo.attr('transition', transition)
  copyToClipboard(transition)
})

$demo.on('animationend', e => {
  $demo.attr('transition', '')
})

const copyToClipboard = text => {
  if (!navigator.clipboard) return

  try {
    navigator.clipboard.writeText(text)
  } 
  catch (err) {
    console.error('Failed to copy: ', err)
  }
}