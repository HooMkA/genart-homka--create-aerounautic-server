// [customrecipe] type=MechanicalCrafting | out=tfmg:radial_engine | in=tfmg:aluminum_ingot,tfmg:steel_ingot,create:shaft,tfmg:heavy_machinery_casing
ServerEvents.recipes(event => {
  event.recipes.create.mechanical_crafting(
    'tfmg:radial_engine',
    [
      ' A ',
      'BBB',
      'CDC',
      'BBB',
      ' A '
    ],
    {
      A: 'tfmg:aluminum_ingot',
      B: 'tfmg:steel_ingot',
      C: 'create:shaft',
      D: 'tfmg:heavy_machinery_casing'
    }
  )
})
