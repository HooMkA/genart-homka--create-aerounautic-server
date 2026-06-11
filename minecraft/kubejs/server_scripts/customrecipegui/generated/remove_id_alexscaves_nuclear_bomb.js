// [customrecipe] type=Remove | out=alexscaves:nuclear_bomb | in=alexscaves:nuclear_bomb | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'alexscaves:nuclear_bomb' })
})
