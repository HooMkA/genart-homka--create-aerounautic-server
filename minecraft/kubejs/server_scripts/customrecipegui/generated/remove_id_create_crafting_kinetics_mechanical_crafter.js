// [customrecipe] type=Remove | out=create:mechanical_crafter | in=create:crafting/kinetics/mechanical_crafter | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'create:crafting/kinetics/mechanical_crafter' })
})
