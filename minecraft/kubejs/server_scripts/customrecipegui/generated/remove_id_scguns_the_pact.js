// [customrecipe] type=Remove | out=scguns:the_pact | in=scguns:the_pact | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'scguns:the_pact' })
})
