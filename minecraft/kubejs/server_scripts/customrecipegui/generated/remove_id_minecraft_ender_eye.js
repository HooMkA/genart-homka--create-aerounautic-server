// [customrecipe] type=Remove | out=minecraft:ender_eye | in=minecraft:ender_eye | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'minecraft:ender_eye' })
})
