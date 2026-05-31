// [customrecipe] type=Shaped 3x3 | out=iceandfire:dragonforge_fire_core_disabled | in=iceandfire:dragonforge_fire_brick,tfmg:fireproof_chemical_vat,iceandfire:fire_dragon_heart
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('iceandfire:dragonforge_fire_core_disabled', 1),
    [
      'ABA',
      'ACA',
      'ABA'
    ],
    {
      A: 'iceandfire:dragonforge_fire_brick',
      B: 'tfmg:fireproof_chemical_vat',
      C: 'iceandfire:fire_dragon_heart'
    }
  )
})
