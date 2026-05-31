// [customrecipe] type=Remove | out=minecraft:ender_eye | in=dndesires:seething/ender_eye_from_ender_pearl | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'dndesires:seething/ender_eye_from_ender_pearl' })
})
