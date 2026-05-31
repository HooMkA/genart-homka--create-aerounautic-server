ServerEvents.recipes(event => {
  [
    'sophisticatedbackpacks:copper_backpack',
    'sophisticatedbackpacks:iron_backpack',
    'sophisticatedbackpacks:iron_backpack_from_copper',
    'sophisticatedbackpacks:gold_backpack',
    'sophisticatedbackpacks:diamond_backpack',
    'sophisticatedbackpacks:netherite_backpack'
  ].forEach(id => {
    event.remove({ id: id })
  })
})