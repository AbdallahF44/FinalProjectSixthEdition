// document.addEventListener("click", (e) => {
//   console.log(e.target);
// });
let toggleDarkBtn = document.querySelector(".box .toggle-con div");

window.onload = () => {
  if (localStorage.getItem("mainColor") === null) {
    document.querySelectorAll(".col")[0].classList.add("active");
  } else {
    document.body.style.cssText = `--main-color:${localStorage.getItem(
      "mainColor"
    )};
    font-family: "Cairo", sans-serif;
    background-color: ${localStorage.getItem("bodyColor")};`;
    console.log(localStorage.getItem("mainColor"));
    document.querySelectorAll(".col").forEach((e) => {
      if (e.innerHTML == localStorage.getItem("mainColor"))
        e.classList.add("active");
    });
  }
  if (localStorage.getItem("bodyColor") === null) {
    document.querySelectorAll(".col-body")[0].classList.add("active");
  } else {
    document.body.style.backgroundColor = `${localStorage.getItem(
      "bodyColor"
    )};`;
    console.log(localStorage.getItem("bodyColor"));
    document.querySelectorAll(".col-body").forEach((e) => {
      if (e.innerHTML == localStorage.getItem("bodyColor"))
        e.classList.add("active");
    });
  }
  if (localStorage.getItem("dark_mode") == "dark") {
    document.body.classList.add("dark");
    document.body.style.backgroundColor = `#333`;
  }
};

if (localStorage.getItem("can") == "true") {
  toggleDarkBtn.classList.add("can");
  toggleDarkBtn.innerHTML = "!(●'◡'●) You Can Convert";
} else if (localStorage.getItem("can") == "false") {
  toggleDarkBtn.classList.remove("can");
} else {
  localStorage.setItem("can", "false");
}

toggleDarkBtn.onclick = () => {
  if (localStorage.getItem("can") == "true") {
    localStorage.setItem("can", "false");
    toggleDarkBtn.classList.remove("can");
    toggleDarkBtn.innerHTML = "!(¬‿¬) You Can Not Convert";
  } else if (localStorage.getItem("can") == "false") {
    localStorage.setItem("can", "true");
    toggleDarkBtn.classList.add("can");
    toggleDarkBtn.innerHTML = "!(●'◡'●) You Can Convert";
  }
};

document.querySelector(".a").onclick = function () {
  if (localStorage.getItem("can") == "true") {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("dark_mode", "dark");
    } else {
      localStorage.setItem("dark_mode", "");
    }
  }
};

//change main color
let colors = document.querySelectorAll(".col");

colors.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("active");
    if (e.classList.contains("active")) {
      colors.forEach((e2) => {
        e2.classList.remove("active");
      });
      e.classList.add("active");
    }
  });
});

let change = document.querySelector(".change");
change.onclick = () => {
  // console.log(act.innerHTML);
  let act = document.querySelector(".colors .active");
  localStorage.setItem("mainColor", act.innerHTML);
  // document.body.style.cssText = `--mFain-color:${act.innerHTML};`;
};

//change body color
let col_body = document.querySelectorAll(".col-body");

col_body.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("active");
    if (e.classList.contains("active")) {
      col_body.forEach((e2) => {
        e2.classList.remove("active");
      });
      e.classList.add("active");
    }
  });
});

let change_body = document.querySelector(".change-body");
change_body.onclick = () => {
  // console.log(act.innerHTML);
  if (document.body.classList.contains("dark"))
    window.alert("لا يمكن التغيير في الوضع المظلم (¬‿¬)!");
  else {
    let act = document.querySelector(".colors-body .active");
    localStorage.setItem("bodyColor", act.innerHTML);
    // document.body.style.cssText = `--mFain-color:${act.innerHTML};`;
  }
};
