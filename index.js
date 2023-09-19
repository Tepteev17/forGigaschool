function showMore() {
  var moreInfo = document.getElementById("moreInfo");
  var button = document.getElementById("showMoreButton");

  if (moreInfo.style.display === "none") {
    moreInfo.style.display = "block";
    button.innerHTML = "hide info";
  } else {
    moreInfo.style.display = "none";
    button.innerHTML = "More info";
  }
}
