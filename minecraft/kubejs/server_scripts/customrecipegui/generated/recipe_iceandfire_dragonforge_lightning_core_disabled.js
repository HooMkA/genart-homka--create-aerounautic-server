// [customrecipe] type=Shaped 3x3 | out=iceandfire:dragonforge_lightning_core_disabled | in=iceandfire:dragonforge_lightning_brick,tfmg:transistor_item,iceandfire:lightning_dragon_heart
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('iceandfire:dragonforge_lightning_core_disabled', 1),
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: 'iceandfire:dragonforge_lightning_brick',
      B: 'tfmg:transistor_item',
      C: 'iceandfire:lightning_dragon_heart'
    }
  )
})
