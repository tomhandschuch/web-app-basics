lastChecked = null;
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    const checkedBoxes = Array.from(checkboxes).filter((box) => box.checked);

    if (checkedBoxes.length > 2) {
      if (lastChecked) {
        lastChecked.checked = false;
      }
    }
    lastChecked = this;
  });
});
