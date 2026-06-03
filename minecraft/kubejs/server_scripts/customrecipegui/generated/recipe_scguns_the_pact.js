// [customrecipe] type=Shaped 3x3 | out=scguns:the_pact | in=scguns:energy_cell,scguns:sculk_cell,scguns:advanced_round,scguns:hog_round,scguns:nether_star_fragment,scguns:ramrod_round,scguns:shotgun_shell,scguns:shock_cell,scguns:gibbs_round
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('scguns:the_pact', 1),
    [
      'ABC',
      'DEF',
      'GHI'
    ],
    {
      A: 'scguns:energy_cell',
      B: 'scguns:sculk_cell',
      C: 'scguns:advanced_round',
      D: 'scguns:hog_round',
      E: 'scguns:nether_star_fragment',
      F: 'scguns:ramrod_round',
      G: 'scguns:shotgun_shell',
      H: 'scguns:shock_cell',
      I: 'scguns:gibbs_round'
    }
  )
})
