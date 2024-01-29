const iTonElement = document.getElementById('i-ton');
const mTonElement = document.getElementById('m-ton');
const kgElement = document.getElementById('kg');
const lbElement = document.getElementById('lb');

const toLb = (kg) => kg * 2.20462;
const toImperialTon = (lb) => lb / 2240;
const toMetricTon = (kg) => kg / 1000;
const imperialTonToLb = (iton) => iton * 2240;
const lbToKg = (lb) => lb * 0.45359;
const kgToMetricTon = (kg) => kg / 1000;


function iTon(val) {
  const iT = val;
  const lb = imperialTonToLb(iT);
  const kg = lbToKg(lb);
  const mt = kgToMetricTon(kg);

  mTonElement.value = mt;
  kgElement.value = kg;
  lbElement.value = lb;
}

function mTon(val) {
  const mt = val;
  const kg = mt * 1000;
  const lb = toLb(kg);
  const iT = toImperialTon(lb);

  iTonElement.value = iT;
  kgElement.value = kg;
  lbElement.value = lb;
}

function pound(val) {
  const lb = val;
  const kg = lbToKg(lb);
  const mt = kgToMetricTon(kg);
  const iT = toImperialTon(lb);

  iTonElement.value = iT;
  mTonElement.value = mt;
  kgElement.value = kg;
}

function kilogram(val) {
  const kg = val;
  const lb = toLb(kg);
  const mt = kgToMetricTon(kg);
  const iT = toImperialTon(lb);

  iTonElement.value = iT;
  mTonElement.value = mt;
  lbElement.value = lb;
}

