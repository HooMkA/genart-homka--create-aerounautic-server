// [customrecipe] type=Shapeless 3x3 | out=scguns:antique_flare | in=minecraft:copper_ingot,scguns:pebbles,scguns:gunpowder_dust
ServerEvents.recipes(event => {
  event.shapeless('1x scguns:antique_flare', [
    'minecraft:copper_ingot',
    'scguns:pebbles',
    'scguns:gunpowder_dust'
  ])
})
