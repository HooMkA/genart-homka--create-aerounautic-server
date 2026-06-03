// [customrecipe] type=Shaped 3x3 | out=scguns:shulker_core | in=minecraft:shulker_shell,minecraft:end_stone,cataclysm:void_core
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('scguns:shulker_core', 1),
    [
      'AAA',
      'BCB',
      'AAA'
    ],
    {
      A: 'minecraft:shulker_shell',
      B: 'minecraft:end_stone',
      C: 'cataclysm:void_core'
    }
  )
})
