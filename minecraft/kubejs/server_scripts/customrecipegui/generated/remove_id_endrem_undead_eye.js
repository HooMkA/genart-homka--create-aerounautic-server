// [customrecipe] type=Remove | out=endrem:undead_eye | in=endrem:undead_eye | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'endrem:undead_eye' })
})
