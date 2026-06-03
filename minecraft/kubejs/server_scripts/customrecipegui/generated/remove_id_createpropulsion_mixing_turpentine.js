// [customrecipe] type=Remove | out=createpropulsion:mixing/turpentine | in=createpropulsion:mixing/turpentine | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'createpropulsion:mixing/turpentine' })
})
