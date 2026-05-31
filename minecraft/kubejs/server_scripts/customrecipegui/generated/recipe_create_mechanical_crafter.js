// [customrecipe] type=Shaped 3x3 | out=create:mechanical_crafter | in=create:electron_tube,immersive_aircraft:industrial_gears,create:brass_casing,minecraft:crafting_table
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('create:mechanical_crafter', 1),
    [
      ' A ',
      'BC ',
      ' D '
    ],
    {
      A: 'create:electron_tube',
      B: 'immersive_aircraft:industrial_gears',
      C: 'create:brass_casing',
      D: 'minecraft:crafting_table'
    }
  )
})
