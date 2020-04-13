export default (base, actions) =>
  ['REQUEST', 'FAILURE', ...actions].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;

    return acc;
  }, {});
