export default (state = null, action) => {
  console.log(`received action ${action.type}`);
  return state;
};
