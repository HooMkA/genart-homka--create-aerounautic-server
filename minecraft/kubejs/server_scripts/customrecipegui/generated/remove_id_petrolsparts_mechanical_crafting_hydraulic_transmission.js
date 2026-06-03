// [customrecipe] type=Remove | out=petrolsparts:hydraulic_transmission | in=petrolsparts:mechanical_crafting/hydraulic_transmission | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'petrolsparts:mechanical_crafting/hydraulic_transmission' })
})
