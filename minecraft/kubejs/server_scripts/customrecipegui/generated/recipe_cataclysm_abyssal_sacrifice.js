// [customrecipe] type=Shaped 3x3 | out=cataclysm:abyssal_sacrifice | in=minecraft:nautilus_shell,cataclysm:athame,cataclysm:coral_chunk,minecraft:diamond_block,minecraft:heart_of_the_sea,minecraft:emerald_block,minecraft:iron_block,minecraft:redstone_block,minecraft:gold_block
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('cataclysm:abyssal_sacrifice', 1),
    [
      'ABC',
      'DEF',
      'GHI'
    ],
    {
      A: 'minecraft:nautilus_shell',
      B: 'cataclysm:athame',
      C: 'cataclysm:coral_chunk',
      D: 'minecraft:diamond_block',
      E: 'minecraft:heart_of_the_sea',
      F: 'minecraft:emerald_block',
      G: 'minecraft:iron_block',
      H: 'minecraft:redstone_block',
      I: 'minecraft:gold_block'
    }
  )
  event.shaped(
    Item.of('cataclysm:abyssal_sacrifice', 1),
    [
      'ABC',
      'DEF',
      'GHI'
    ],
    {
      A: 'minecraft:nautilus_shell',
      B: 'cataclysm:athame',
      C: 'cataclysm:crystallized_coral',
      D: 'minecraft:diamond_block',
      E: 'minecraft:heart_of_the_sea',
      F: 'minecraft:emerald_block',
      G: 'minecraft:iron_block',
      H: 'minecraft:redstone_block',
      I: 'minecraft:gold_block'
    }
  )
})

