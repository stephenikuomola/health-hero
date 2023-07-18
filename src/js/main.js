// Here I want to initialize all the constants I will be working with.
const CM_TO_M = 1e2;
const EXPONENT = 2;
const STONE_TO_POUNDS = 14;
const POUNDS_TO_KILOGRAMS = 0.45359237;
const FOOT_TO_INCHES = 12;
const INCH_TO_METERS = 0.0254;
const M_TO_FEET = 3.28084;
const BMI_CONSTANT = 703;
const METRIC = "metric";
const IMPERIAL = "imperial";

// I need to create constants for realistic inputs the user should enter
const MIN_KG = 2;
const MAX_KG = 635;
const MIN_CM = 50;
const MAX_CM = 250;
const MAX_FEET = 8;
const MIN_FEET = 1;
const MIN_INCHES = 0;
const MAX_INCHES = 11;
const MIN_STONE = 2;
const MAX_STONE = 100;
const MIN_POUNDS = 0;
const MAX_POUNDS = 13;

// Making use of Object-Oriented-Programming, I will be creating an objects that will group the BMI classification and the ranges
class BmiCategoryRange {
  constructor(category, min, max) {
    this.category = category;
    this.minBmi = min;
    this.maxBmi = max;
  }
}

const underWeight = new BmiCategoryRange("underweight", -Infinity, 18.5);
const healthyWeight = new BmiCategoryRange("healthy weight", 18.5, 24.9);
const overWeight = new BmiCategoryRange("overweight", 25, 29.9);
const obese = new BmiCategoryRange("obese", 30, Infinity);

// I need to create a list of the ranges and their categories in an array. So an array of objects.
const bmiCategories = [underWeight, healthyWeight, overWeight, obese];

// Create a function that does the conversion of the metric units to kg and meters
function metricKgM(kilogram, centimeters) {
  const kilograms = parseFloat(kilogram.toFixed(1));
  const meters = parseFloat((centimeters / CM_TO_M).toFixed(2));
  return new Metric(kilograms, meters);
}

// Create a function that does the conversion of the imperial units to hg and metres.
function imperialKgM(stone, pounds, feet, inches) {
  const kilograms = parseFloat(
    ((stone * STONE_TO_POUNDS + pounds) * POUNDS_TO_KILOGRAMS).toFixed(1)
  );
  const meters = parseFloat(
    ((feet * FOOT_TO_INCHES + inches) * INCH_TO_METERS).toFixed(2)
  );
  return new Imperial(kilograms, meters);
}

// Create a base class called Units since The Metric class and the Imperial but have some common functionalities
class Units {
  constructor(weight, height) {
    this._weight = weight;
    this._height = height;
    this._calcBMI();
    this._getWeightClassification();
  }

  _calcBMI() {
    this.BMI = parseFloat((this._weight / this._height ** EXPONENT).toFixed(1));
  }

  _getBmiCategory() {
    for (const bmiCategory of bmiCategories) {
      if (
        (bmiCategory.minBmi === -Infinity || this.BMI >= bmiCategory.minBmi) &&
        (bmiCategory.maxBmi === Infinity || this.BMI <= bmiCategory.maxBmi)
      ) {
        return bmiCategory;
      }
    }
  }

  _getWeightClassification() {
    const bmiCategory = this._getBmiCategory();
    this.classification = bmiCategory.category;
  }

  _getIdealWeightRangesInKgs() {
    const bmiCategory = this._getBmiCategory();
    const minIdealWeightInKg =
      bmiCategory.minBMI === -Infinity
        ? null
        : parseFloat(
            (bmiCategory.minBmi * this._height ** EXPONENT).toFixed(1)
          );
    const maxIdealWeightInKg = parseFloat(
      bmiCategory.maxBMI === Infinity
        ? null
        : (bmiCategory.maxBmi * this._height ** EXPONENT).toFixed(1)
    );
    this._idealWeightRangesInKgs = new Array(
      minIdealWeightInKg,
      maxIdealWeightInKg
    );
    return this._idealWeightRangesInKgs;
  }
}

// Metric
class Metric extends Units {
  constructor(weight, height) {
    super(weight, height);
    this.#getIdealWeightMessage();
  }

  #getIdealWeightMessage() {
    if (this.classification == underWeight.category) {
      this.idealWeightMessage = `${
        this._getIdealWeightRangesInKgs()[1]
      }kgs and below`;
    } else if (this.classification == obese.category) {
      this.idealWeightMessage = `${
        this._getIdealWeightRangesInKgs()[0]
      }kgs and above`;
    } else {
      this.idealWeightMessage = `${this._getIdealWeightRangesInKgs()[0]}kgs - ${
        this._getIdealWeightRangesInKgs()[1]
      }kgs`;
    }
  }
}

// Imperial
class Imperial extends Units {
  #feet;
  #inches;
  #idealWeightRangesInStLbs;
  constructor(weight, height) {
    super(weight, height);
    this.#imperialHeightFtIn();
    this.#getIdealWeightRangesInStAndLbs();
    this.#getIdealWeightMessage();
  }

  #imperialHeightFtIn() {
    const heightInFeet = this._height * M_TO_FEET;
    // We need to extract the whole number of feet and the remaining inches
    this.#feet = Math.floor(heightInFeet);
    this.#inches = Math.round((heightInFeet - this.#feet) * FOOT_TO_INCHES);
  }

  #getIdealWeightRangesInStAndLbs() {
    const bmiCategory = this._getBmiCategory();

    // Convert the height to inches
    const heightInInches = this.#feet * FOOT_TO_INCHES + this.#inches;

    // Calculate the minimum and maximum ideal weights in pounds
    const minIdealWeightInPounds =
      bmiCategory.minBmi === -Infinity
        ? null
        : Math.trunc(
            ((bmiCategory.minBmi * Math.pow(heightInInches, EXPONENT)) /
              BMI_CONSTANT) %
              STONE_TO_POUNDS
          );
    const maxIdealWeightInPounds =
      bmiCategory.maxBmi === Infinity
        ? null
        : Math.trunc(
            ((bmiCategory.maxBmi * Math.pow(heightInInches, EXPONENT)) /
              BMI_CONSTANT) %
              STONE_TO_POUNDS
          );
    const minIdealWeightInStone =
      bmiCategory.minBmi === -Infinity
        ? null
        : Math.trunc(
            (bmiCategory.minBmi * Math.pow(heightInInches, EXPONENT)) /
              BMI_CONSTANT /
              STONE_TO_POUNDS
          );
    const maxIdealWeightInStone =
      bmiCategory.maxBmi == Infinity
        ? null
        : Math.trunc(
            (bmiCategory.maxBmi * Math.pow(heightInInches, EXPONENT)) /
              BMI_CONSTANT /
              STONE_TO_POUNDS
          );

    this.#idealWeightRangesInStLbs = new Array(
      minIdealWeightInStone,
      minIdealWeightInPounds,
      maxIdealWeightInStone,
      maxIdealWeightInPounds
    );
    return this.#idealWeightRangesInStLbs;
  }

  #getIdealWeightMessage() {
    if (this.classification == underWeight.category) {
      this.idealWeightMessage = `${
        this.#getIdealWeightRangesInStAndLbs()[2]
      }st ${this.#getIdealWeightRangesInStAndLbs()[3]}lbs and below`;
    } else if (this.classification == obese.category) {
      this.idealWeightMessage = `${
        this.#getIdealWeightRangesInStAndLbs()[0]
      }st ${this.#getIdealWeightRangesInStAndLbs()[1]}lbs and above`;
    } else {
      this.idealWeightMessage = `${
        this.#getIdealWeightRangesInStAndLbs()[0]
      }st ${this.#getIdealWeightRangesInStAndLbs()[1]}lbs - ${
        this.#getIdealWeightRangesInStAndLbs()[2]
      }st ${this.#getIdealWeightRangesInStAndLbs()[3]}lbs`;
    }
  }
}

class AppComponent {
  #metricRadio = document.getElementById("metric");
  #imperialRadio = document.getElementById("imperial");
  #kgInput = document.getElementById("weight-in-kg");
  #cmInput = document.getElementById("height-in-cm");
  #stInput = document.getElementById("weight-in-stone");
  #lbsInput = document.getElementById("weight-in-pounds");
  #ftInput = document.getElementById("height-in-feet");
  #inInput = document.getElementById("height-in-inches");
  #metricGroup = document.getElementById("metric-inputs");
  #imperialGroup = document.getElementById("imperial-inputs");
  #displayResult = document.querySelector("div[class='display-result']");

  constructor() {
    this.#metricRadio.addEventListener("change", this.#selectUnit.bind(this));
    this.#imperialRadio.addEventListener("change", this.#selectUnit.bind(this));
    this.#kgInput.addEventListener(
      "input",
      this.#handleValidationAndCalculation.bind(this)
    );
    this.#cmInput.addEventListener(
      "input",
      this.#handleValidationAndCalculation.bind(this)
    );
    this.#stInput.addEventListener(
      "input",
      this.#handleValidationAndCalculation.bind(this)
    );
    this.#lbsInput.addEventListener(
      "input",
      this.#handleValidationAndCalculation.bind(this)
    );
    this.#ftInput.addEventListener(
      "input",
      this.#handleValidationAndCalculation.bind(this)
    );
    this.#inInput.addEventListener(
      "input",
      this.#handleValidationAndCalculation.bind(this)
    );
  }

  // Toggle the radio buttons functionality.
  #selectUnit(evtObj) {
    const selectedUnit = evtObj.target.value;

    if (selectedUnit == METRIC) {
      this.#metricGroup.classList.add("active");
      this.#imperialGroup.classList.remove("active");
    }

    if (selectedUnit == IMPERIAL) {
      this.#metricGroup.classList.remove("active");
      this.#imperialGroup.classList.add("active");
    }
  }

  // Handle input validation and calculation.
  #handleValidationAndCalculation() {
    let unit;

    // So we need to know which radio button has been clicked to enable validate its respective input.
    if (this.#metricRadio.checked) {
      const kg = parseFloat(this.#kgInput.value.trim());
      const cm = parseFloat(this.#cmInput.value.trim());

      if (
        !isFinite(kg) ||
        !isFinite(cm) ||
        kg < MIN_KG ||
        kg > MAX_KG ||
        cm > MAX_CM ||
        cm < MIN_CM
      ) {
        this.#showErrorMessage(kg, this.#kgInput, "kilogram");
        this.#showErrorMessage(cm, this.#cmInput, "centimeter");
        return;
      }

      this.#removeErrorMessage(this.#cmInput, "");
      this.#removeErrorMessage(this.#kgInput, "");

      unit = metricKgM(kg, cm);
    }

    if (this.#imperialRadio.checked) {
      const st = parseFloat(this.#stInput.value.trim());
      const lbs = parseFloat(this.#lbsInput.value.trim());
      const ft = parseFloat(this.#ftInput.value.trim());
      const inches = parseFloat(this.#inInput.value.trim());

      if (
        !isFinite(st) ||
        !isFinite(lbs) ||
        !isFinite(ft) ||
        !isFinite(inches) ||
        ft < MIN_FEET ||
        ft > MAX_FEET ||
        inches < MIN_INCHES ||
        inches > MAX_INCHES ||
        st < MIN_STONE ||
        st > MAX_STONE ||
        lbs < MIN_POUNDS ||
        lbs > MAX_POUNDS
      ) {
        this.#showErrorMessage(st, this.#stInput, "stone");
        this.#showErrorMessage(lbs, this.#lbsInput, "pounds");
        this.#showErrorMessage(ft, this.#ftInput, "feet");
        this.#showErrorMessage(inches, this.#inInput, "inches");
        return;
      }

      this.#removeErrorMessage(this.#stInput, "");
      this.#removeErrorMessage(this.#lbsInput, "");
      this.#removeErrorMessage(this.#ftInput, "");
      this.#removeErrorMessage(this.#inInput, "");

      unit = imperialKgM(st, lbs, ft, inches);
    }

    this.#renderDisplayResult(unit);
  }

  #removeErrorMessage(input, message) {
    input.nextElementSibling.nextElementSibling.innerText = message;
    input.setAttribute("aria-invalid", "false");
    input.nextElementSibling.nextElementSibling.setAttribute("hidden", "");
  }

  #showErrorMessage(value, input, identifier) {
    if (!isFinite(value)) {
      this.#errorMessage(input, "Enter a number");
      this.#resetDisplayResult();
    } else if (
      (value < MIN_KG && identifier == "kilogram") ||
      (value < MIN_CM && identifier == "centimeter") ||
      (value < MIN_FEET && identifier == "feet") ||
      (value < MIN_INCHES && identifier == "inches") ||
      (value < MIN_STONE && identifier == "stone") ||
      (value < MIN_POUNDS && identifier == "pounds")
    ) {
      this.#errorMessage(input, "Number is too Small");
      this.#resetDisplayResult();
    } else if (
      (value > MAX_KG && identifier == "kilogram") ||
      (value > MAX_CM && identifier == "centimeter") ||
      (value > MAX_FEET && identifier == "feet") ||
      (value > MAX_INCHES && identifier == "inches") ||
      (value > MAX_STONE && identifier == "stone") ||
      (value > MAX_POUNDS && identifier == "pounds")
    ) {
      this.#errorMessage(input, "Number is too Large");
      this.#resetDisplayResult();
    } else {
      this.#removeErrorMessage(input, "");
    }
  }

  #errorMessage(input, message) {
    input.nextElementSibling.nextElementSibling.innerText = message;
    input.setAttribute("aria-invalid", "true");
    input.nextElementSibling.nextElementSibling.removeAttribute("hidden");
  }

  #resetDisplayResult() {
    this.#displayResult.innerHTML = `
    <p><strong>Welcome!</strong></p>
    <p>
      Enter your height and weight and you’ll see your BMI result here
    </p>`;
  }

  #renderDisplayResult(unit) {
    this.#displayResult.innerHTML = `
    <div class="display-result__details">
      <p>Your BMI is... <br/><strong>${unit.BMI}</strong></p>
      <p> Your BMI suggests you're ${
        unit.classification == "healthy weight" ? "a" : ""
      } ${unit.classification}. Your ideal weight is between   <strong>${
      unit.idealWeightMessage
    }</strong>.</p>
    </div> 
  `;
  }
}

new AppComponent();

// Animations
class BootStrapAnimation {
  #section;
  constructor(section) {
    this.#section = section;
    this.#observeIntersection();
  }

  #handleIntersection(entries, observer) {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    }
  }

  #observeIntersection() {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver(
      this.#handleIntersection,
      observerOptions
    );
    observer.observe(this.#section);
  }
}

function animateOnIt() {
  const sections = document.querySelectorAll("section");
  for (const section of sections) {
    new BootStrapAnimation(section);
  }
}

animateOnIt();
