// [customrecipe] type=Shaped 3x3 | out=kubejs:armor_core | in=minecraft:cobblestone,minecraft:stone,minecraft:iron_block
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('kubejs:armor_core', 1),
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: 'minecraft:cobblestone',
      B: 'minecraft:stone',
      C: 'minecraft:iron_block'
    }
  )
})
