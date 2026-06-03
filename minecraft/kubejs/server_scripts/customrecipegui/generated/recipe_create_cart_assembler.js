// [customrecipe] type=Shaped 3x3 | out=create:cart_assembler | in=minecraft:redstone,minecraft:minecart,createbigcannons:steel_ingot
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('create:cart_assembler', 1),
    [
      'ABA',
      'C C',
      '   '
    ],
    {
      A: 'minecraft:redstone',
      B: 'minecraft:minecart',
      C: 'createbigcannons:steel_ingot'
    }
  )
})
