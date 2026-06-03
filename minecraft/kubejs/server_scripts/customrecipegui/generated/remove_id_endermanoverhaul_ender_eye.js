// [customrecipe] type=Remove | out=minecraft:ender_eye | in=endermanoverhaul:ender_eye | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'endermanoverhaul:ender_eye' })
})
