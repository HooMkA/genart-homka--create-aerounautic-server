// [customrecipe] type=Shaped 3x3 | out=minecraft:ender_eye | in=create:powdered_obsidian,minecraft:ender_pearl,minecraft:blaze_rod
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:ender_eye', 1),
    [
      ' A ',
      ' B ',
      ' C '
    ],
    {
      A: 'create:powdered_obsidian',
      B: 'minecraft:ender_pearl',
      C: 'minecraft:blaze_rod'
    }
  )
})
