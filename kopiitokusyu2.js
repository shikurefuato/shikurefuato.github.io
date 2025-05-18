const sap2ort = document.getElementById('saport');
let executionCount = 0;

function deepClone(value, visited = new WeakMap()) {
  // 原始値、null、undefinedはそのまま返す
  if (value === null || typeof value !== 'object') {
    return value;
  }

  // 循環参照防止
  if (visited.has(value)) {
    return visited.get(value);
  }

  // 関数の場合はtoString()で文字列としてコピー（再実行はできない）
  if (typeof value === 'function') {
    const funcClone = new Function('return ' + value.toString())();
    visited.set(value, funcClone);
    return funcClone;
  }

  // 日付、正規表現など（必要なら拡張）
  if (value instanceof Date) return new Date(value);
  if (value instanceof RegExp) return new RegExp(value);

  // 配列
  if (Array.isArray(value)) {
    const arrCopy = [];
    visited.set(value, arrCopy);
    for (const item of value) {
      arrCopy.push(deepClone(item, visited));
    }
    return arrCopy;
  }

  // 通常のオブジェクト
  const objCopy = {};
  visited.set(value, objCopy);
  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      objCopy[key] = deepClone(value[key], visited);
    }
  }
  return objCopy;
}

function switchDisplay() {
  executionCount++;

  const firstId = `show-first${executionCount}`;

  const adsVarName = `adsbygoogle${executionCount}`;
  
  sap2ort.insertAdjacentHTML(
    'afterend',
    `<p id="${firstId}"><ins class="adsbygoogle${executionCount}" style="display: block;" data-ad-client="ca-pub-5005673256143644" data-ad-slot="2662431207" data-ad-format="auto" data-full-width-responsive="true"><!-- --></ins></p>`
  );



// コピー実行
if (typeof window.adsbygoogle !== "undefined") {
  window[adsVarName] = deepClone(window.adsbygoogle);
} else {

}

}


function switchDisplay2() {
  const currentId = `show-first${executionCount}`;
  const showFirst = document.getElementById(currentId);

  if (showFirst) {
    showFirst.classList.add("d-none");
  }
}

function tinyDelay() {
  return Promise.resolve();
}

async function repeatDelay(times) {
  for (let i = 0; i < times; i++) {
    await tinyDelay();
  }
}

async function main() {

  switchDisplay();

  await tinyDelay();

const adsVarName = `adsbygoogle${executionCount}`;

(window[adsVarName] = window[adsVarName] || []).push({});

  await tinyDelay();

  switchDisplay2();

await tinyDelay();

}

async function repeatMain(times) {
  for (let i = 0; i < times; i++) {
    await main();
  }
}


repeatMain(300);

setTimeout(() => {
  repeatMain(300);
}, 500);