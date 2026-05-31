// [customrecipe] type=Shaped 3x3 | out=tfmg:industrial_mixer | in=tfmg:screw,create:shaft,tfmg:steel_mechanism,tfmg:heavy_machinery_casing,tfmg:radial_engine
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('tfmg:industrial_mixer', 1),
    [
      'ABA',
      'CDC',
      'AEA'
    ],
    {
      A: 'tfmg:screw',
      B: 'create:shaft',
      C: 'tfmg:steel_mechanism',
      D: 'tfmg:heavy_machinery_casing',
      E: 'tfmg:radial_engine'
    }
  )
})
