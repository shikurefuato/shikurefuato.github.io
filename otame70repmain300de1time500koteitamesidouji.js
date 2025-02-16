const sap2ort = document.getElementById('saport');
let executionCount = 0;
let execution2Count = 0;

function switchDisplay() {
  executionCount++;

  const firstId = `show-first${executionCount}`;
  
  sap2ort.insertAdjacentHTML(
    'afterend',
    `<p id="${firstId}"><ins class="adsbygoogle" style="display: block;" data-ad-client="ca-pub-5005673256143644" data-ad-slot="2662431207" data-ad-format="auto" data-full-width-responsive="true"><!-- --></ins></p>`
  );
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


async function main() {

  switchDisplay();

  await tinyDelay();

(adsbygoogle = window.adsbygoogle || []).push({});

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



function switch2Display() {
  execution2Count++;

  const firstId = `show-2first${execution2Count}`;
  
  sap2ort.insertAdjacentHTML(
    'afterend',
    `<p id="${firstId}"><ins class="adsbygoogle" style="display:inline-block;width:728px;height:90px" data-ad-client="ca-pub-5005673256143644" data-ad-slot="3683800610"><!-- --></ins></p>`
  );
}

function switch2Display2() {
  const currentId = `show-2first${execution2Count}`;
  const showFirst = document.getElementById(currentId);

  if (showFirst) {
    showFirst.classList.add("d-none");
  }
}

async function ma2in() {

  switch2Display();

  await tinyDelay();

(adsbygoogle = window.adsbygoogle || []).push({});

  await tinyDelay();

  switch2Display2();

await tinyDelay();

}

async function repeat2Main(times) {
  for (let i = 0; i < times; i++) {
    await ma2in();
  }
}

repeat2Main(300);

setTimeout(() => {
  repeat2Main(300);
}, 500);