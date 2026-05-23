// [customrecipe] type=Remove | out=endrem:exotic_eye | in=endrem:exotic_eye | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'endrem:exotic_eye' })
})
