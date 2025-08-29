// Models data
const models = {
  samsung: ["Galaxy S24", "Galaxy A55", "Galaxy Note 20"],
  apple: ["iPhone 16","iPhone 15", "iPhone 14", "iPhone 13","iPhone 12","iPhone 12 pro max","iPhone 6","iPhone X"],
  xiaomi: ["Redmi Note 13", "Mi 11X", "Poco X6"]
};

const brandSelect = document.getElementById("brand");
const modelSelect = document.getElementById("model");
const searchBtn = document.getElementById("searchBtn");
const resultDiv = document.getElementById("result");

// When brand changes, update models dropdown
brandSelect.addEventListener("change", function() {
  const brand = this.value;
  modelSelect.innerHTML = '<option value="">--Choose Model--</option>'; // reset

  if (models[brand]) {
    models[brand].forEach(model => {
      let option = document.createElement("option");
      option.value = model;
      option.textContent = model;
      modelSelect.appendChild(option);
    });
  }
});

// When Search button is clicked
searchBtn.addEventListener("click", function() {
  const brand = brandSelect.value;
  const model = modelSelect.value;

  if (brand && model) {
    resultDiv.textContent = `You selected: ${brand.toUpperCase()} - ${model}`;
  } else {
    resultDiv.textContent = " Please select both brand and model.";
  }
});
