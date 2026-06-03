// [customrecipe] type=Milling | out=immersive_aircraft:industrial_gears | in=immersive_aircraft:bamboo_hopper
ServerEvents.recipes(event => {
  event.recipes.create.milling(
    [
      'immersive_aircraft:industrial_gears'
    ],
    'immersive_aircraft:bamboo_hopper'
  )
})
