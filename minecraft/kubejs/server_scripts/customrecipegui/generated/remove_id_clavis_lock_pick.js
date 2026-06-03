// [customrecipe] type=Remove | out=clavis:lock_pick | in=clavis:lock_pick | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'clavis:lock_pick' })
})
