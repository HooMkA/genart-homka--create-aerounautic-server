// [customrecipe] type=Remove | out=createbigcannons:steel_ingot | in=createbigcannons:mixing/alloy_steel | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'createbigcannons:mixing/alloy_steel' })
})
