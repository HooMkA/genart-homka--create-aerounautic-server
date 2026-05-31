// [customrecipe] type=Remove | out=tfmg:industrial_mixer | in=tfmg:crafting/materials/industrial_mixer | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'tfmg:crafting/materials/industrial_mixer' })
})
