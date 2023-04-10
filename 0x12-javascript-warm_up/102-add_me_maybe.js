#!/usr/bin/node
rts.addMeMaybe = function (x, theFunction) {
  return x + theFunction(x + 1);
};
