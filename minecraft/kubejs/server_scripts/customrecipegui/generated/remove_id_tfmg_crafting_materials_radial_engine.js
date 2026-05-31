// [customrecipe] type=Remove | out=tfmg:radial_engine | in=tfmg:crafting/materials/radial_engine | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'tfmg:crafting/materials/radial_engine' })
})
