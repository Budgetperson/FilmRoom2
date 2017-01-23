// http://redux.js.org/docs/recipes/ReducingBoilerplate.html#generating-action-creators
export const makeActionCreator = function(type, ...argNames) {
  return function(...args) {
    let action = { type };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index]
    })
    return action;
  }
}
