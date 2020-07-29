import $ from 'blingblingjs'

const $demo = $('section')
const $transitions = $('dd')

$transitions.on('click', e => {
  let transition = e.target.textContent
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