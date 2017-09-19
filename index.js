function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var rankedLists = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < rankedLists.length; i++) {
    rankedLists[i].innerHTML = parseInt(rankedLists[i]) + 1
  }
}

function deepestChild() {
  const grandNode = document.querySelector('div#grand-node')
  var current = grandNode;
  while (current.children[0]) {
    current = current.children[0]
  }
  return current;
}
