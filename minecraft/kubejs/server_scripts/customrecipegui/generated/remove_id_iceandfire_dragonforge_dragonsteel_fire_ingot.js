// [customrecipe] type=Remove | out=iceandfire:dragonsteel_fire_ingot | in=iceandfire:dragonforge/dragonsteel_fire_ingot | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'iceandfire:dragonforge/dragonsteel_fire_ingot' })
  
})
ServerEvents.recipes(event => {
    event.custom(
    {
      "type": "iceandfire:dragonforge",
      "dragonType": "fire",
      "cookTime": 1000,
      "input": {
        "item": "betterend:thallasium_ingot"
      },
      "blood": {
        "item": "iceandfire:fire_dragon_blood"
      },
      "result": {
      "id": "iceandfire:dragonsteel_fire_ingot"
      }
    })
})
