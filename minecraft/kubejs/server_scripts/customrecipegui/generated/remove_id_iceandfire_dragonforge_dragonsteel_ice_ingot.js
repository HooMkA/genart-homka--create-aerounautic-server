// [customrecipe] type=Remove | out=iceandfire:dragonsteel_ice_ingot | in=iceandfire:dragonforge/dragonsteel_ice_ingot | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'iceandfire:dragonforge/dragonsteel_ice_ingot' })
})
ServerEvents.recipes(event => {
    event.custom(
    {
      "type": "iceandfire:dragonforge",
      "dragonType": "ice",
      "cookTime": 1000,
      "input": {
        "item": "betterend:thallasium_ingot"
      },
      "blood": {
        "item": "iceandfire:ice_dragon_blood"
      },
      "result": {
      "id": "iceandfire:dragonsteel_ice_ingot"
      }
    })
})