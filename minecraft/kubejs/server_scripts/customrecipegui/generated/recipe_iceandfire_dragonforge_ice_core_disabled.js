// [customrecipe] type=Shaped 3x3 | out=iceandfire:dragonforge_ice_core_disabled | in=iceandfire:dragonforge_ice_brick,tfmg:cooling_fluid_bucket,iceandfire:ice_dragon_heart
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('iceandfire:dragonforge_ice_core_disabled', 1),
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: 'iceandfire:dragonforge_ice_brick',
      B: 'tfmg:cooling_fluid_bucket',
      C: 'iceandfire:ice_dragon_heart'
    }
  )
})
