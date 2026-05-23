// [customrecipe] type=Shaped 3x3 | out=tfmg:fireproof_bricks | in=tfmg:fireproof_brick,createbigcannons:nethersteel_ingot
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('tfmg:fireproof_bricks', 1),
    [
      'A A',
      ' B ',
      'A A'
    ],
    {
      A: 'tfmg:fireproof_brick',
      B: 'createbigcannons:nethersteel_ingot'
    }
  )
})
