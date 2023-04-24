mainQuery.oninput = function () {
  mainQuery.value.toLowerCase();  
  changesDom(mainQuery.value);
};

changesDom = function (st) {
  if (st.includes("spanish") && st.includes("war") && st.includes("bor")) {
    resultDom.innerHTML = "<li>Search for <b>warehouses</b> in <b>Bordeaux</b> that speaks Spanish</li>";
  }
  if (st.includes("spain") && st.includes("war") && st.includes("bor")) {
    resultDom.innerHTML = "<li>Search for <b>warehouses</b> in <b>Bordeaux</b> that speaks Spanish</li>";
  }
  else if (st.includes("war") && st.includes("bor")) {
    resultDom.innerHTML = "<li>Search for <b>warehouses</b> in <b>Bordeaux</b></li>";
  }
  else if (st.includes("war")) {
    resultDom.innerHTML = "<li>Search for <b>warehouses</b></li>";
  }
  else if (st.includes("bor")) {
    resultDom.innerHTML = "<li>Companies based in <b>Bordeaux</b></li>";
  }
  else if (st == "abcdefg") {
    resultDom.innerHTML = "<li><b>abcdef</b>hij</li>";
  }
  else if (st == "abcdef") {
    resultDom.innerHTML = "<li><b>abcdef</b>ghij</li>";
  }
  else if (st == "abcde") {
    resultDom.innerHTML = "<li><b>abcde</b>fghij</li>";
  }
  else if (st == "abcd") {
    resultDom.innerHTML = "<li><b>abcd</b>efghij</li><li><b>abcd</b>mn</li>";
  }
  else if (st == "abc") {
    resultDom.innerHTML = "<li><a href='#'><b>abc</b>defghij</a></li><li><a href='#'><b>abcd</b>mnopq</a></li><li><a href='#'><b>abc</b>kwyz</li></a>";
  }
  else {
    resultDom.innerHTML = "";
  }
};
