// [customrecipe] type=Remove | out=petrolsparts:pneumatic_tube | in=petrolsparts:crafting/pneumatic_tube | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'petrolsparts:crafting/pneumatic_tube' })
})
