// [customrecipe] type=MechanicalCrafting | out=immersive_aircraft:industrial_gears | in=createcasing:brass_cogwheel,create:electron_tube,gnkinetics:andesite_cogwheel,create:brass_casing
ServerEvents.recipes(event => {
  event.recipes.create.mechanical_crafting(
    'immersive_aircraft:industrial_gears',
    [
      '  A  ',
      ' BCB ',
      'ACDCA',
      ' BCB ',
      '  A  '
    ],
    {
      A: 'createcasing:brass_cogwheel',
      B: 'create:electron_tube',
      C: 'gnkinetics:andesite_cogwheel',
      D: 'create:brass_casing'
    }
  )
})
