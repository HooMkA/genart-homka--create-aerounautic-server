// [customrecipe] type=MechanicalCrafting | out=alexscaves:nuclear_bomb | in=tfmg:aluminum_block,minecraft:iron_block,tfmg:circuit_board,alexscaves:fissile_core,alexscaves:uranium_rod,alexscaves:charred_remnant,minecraft:netherite_ingot,alexscaves:block_of_uranium
ServerEvents.recipes(event => {
  event.recipes.create.mechanical_crafting(
    'alexscaves:nuclear_bomb',
    [
      'AABCBAA',
      'ADEFEDA',
      'GEHHHEG',
      'CFHHHFC',
      'GEHHHEG',
      'ADEFEDA',
      'AABCBAA'
    ],
    {
      A: 'tfmg:aluminum_block',
      B: 'iceandfire:dragonsteel_fire_ingot',
      C: 'tfmg:circuit_board',
      D: 'alexscaves:fissile_core',
      E: 'alexscaves:uranium_rod',
      F: 'alexscaves:charred_remnant',
      G: 'minecraft:netherite_ingot',
      H: 'alexscaves:block_of_uranium'
    }
  )
})
