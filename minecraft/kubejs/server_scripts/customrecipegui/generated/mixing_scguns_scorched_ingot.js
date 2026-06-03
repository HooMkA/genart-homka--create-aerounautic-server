// [customrecipe] type=Mixing | out=scguns:scorched_ingot | in=iceandfire:dragonsteel_ice_ingot,iceandfire:dragonsteel_lightning_ingot,iceandfire:dragonsteel_fire_ingot,scguns:scorched_blend | heat=superheated
ServerEvents.recipes(event => {
  event.recipes.create.mixing(
    [
      'scguns:scorched_ingot'
    ],
    [
      'iceandfire:dragonsteel_ice_ingot',
      'iceandfire:dragonsteel_lightning_ingot',
      'iceandfire:dragonsteel_fire_ingot',
      'scguns:scorched_blend'
    ]
  ).superheated()
})
