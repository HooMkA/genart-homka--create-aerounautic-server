// [customrecipe] type=Remove | out=endrem:witch_eye | in=endrem:witch_eye | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'endrem:witch_eye' })
})
