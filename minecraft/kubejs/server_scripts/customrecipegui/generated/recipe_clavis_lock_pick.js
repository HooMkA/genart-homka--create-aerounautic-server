// [customrecipe] type=Shaped 3x3 | out=clavis:lock_pick | in=minecraft:iron_ingot,minecraft:gold_ingot
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('clavis:lock_pick', 1),
    [
      'AB ',
      'A  ',
      'A  '
    ],
    {
      A: 'minecraft:iron_ingot',
      B: 'minecraft:gold_ingot'
    }
  )
})
