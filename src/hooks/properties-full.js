module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function (hook) {

    const action_id =   hook.result.action_id;
    const type_id = hook.result.type_id;
    const city_id = hook.result.city_id;
    const area_id = hook.result.area_id;
    const owner_id = hook.result.owner_id;
    const company_id = hook.result.company_id;
    const zone_id = hook.result.zone_id;
    const country_id = hook.result.country_id;

      return(
      hook.app.service('actions').get(action_id).then(action => {hook.result.action = action.name;}),
      hook.app.service('typeofproperty').get(type_id).then(type => {hook.result.type = type.name;}),
      hook.app.service('cities').get(city_id).then(city => { hook.result.city = city.name}),
      hook.app.service('countries').get(country_id).then(country => {hook.result.county = country.name }),
      hook.app.service('zones').get(zone_id).then(zone => {hook.result.zone = zone.name }),
      hook.app.service('area').get(area_id).then(areas => {hook.result.areas = areas.name}),
      hook.app.service('company').get(company_id).then(company => {hook.result.company = company.name}),
      hook.app.service('owners').get(owner_id).then(owner => {hook.result.owner = owner.name + " " +owner.lastname})
  )};
};
