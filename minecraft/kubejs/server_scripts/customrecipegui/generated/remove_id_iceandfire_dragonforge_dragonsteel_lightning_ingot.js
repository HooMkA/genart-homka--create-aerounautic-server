// [customrecipe] type=Remove | out=iceandfire:dragonsteel_lightning_ingot | in=iceandfire:dragonforge/dragonsteel_lightning_ingot | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'iceandfire:dragonforge/dragonsteel_lightning_ingot' })
})
ServerEvents.recipes(event => {
    event.custom(
    {
      "type": "iceandfire:dragonforge",
      "dragonType": "lightning",
      "cookTime": 1000,
      "input": {
        "item": "betterend:thallasium_ingot"
      },
      "blood": {
        "item": "iceandfire:lightning_dragon_blood"
      },
      "result": {
      "id": "iceandfire:dragonsteel_lightning_ingot"
      }
    })
})