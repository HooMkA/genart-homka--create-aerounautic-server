// [customrecipe] type=Remove | out=sophisticatedbackpacks:backpack | in=sophisticatedbackpacks:backpack | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'sophisticatedbackpacks:backpack' })
})
