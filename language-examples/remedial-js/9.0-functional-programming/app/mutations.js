function mutationExample01 () {
  // impure, mutates param
  function impureParamUpdate(obj, b) {
    obj.val = b;
  }

  const mutableStateObj = { val: 'fleetings' };
  impureParamUpdate(mutableStateObj, 'mutated');

  console.log(mutableStateObj.val); // 'mutated'

  // pure, returns new object rather than mutating old one
  function pureParamUpdate (obj, b) {
    return Object.assign({}, obj, {
      val: b
    });
  }

  const stateObj = { val: 'initial state' };
  const newStateObj = pureParamUpdate(stateObj, 'next state');

  // stateObj is unchanged
  console.log(stateObj.val); // 'initial state'
  console.log(newStateObj.val); // 'next state'

  // Array.prototype.concat is pure because it does not mutate it's array
  const seq = [1, 2, 3, 4];
  const longerSeq = seq.concat(5);

  console.log(seq); // [1, 2, 3, 4]
  console.log(longerSeq); // [1, 2, 3, 4, 5]

  // Array.prototype.push is impure, as it mutates it's array
  seq.push(5);
  console.log(seq); // [1, 2, 3, 4, 5]
}

exports.mutationExample01 = mutationExample01;