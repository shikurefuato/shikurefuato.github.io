const sap2ort = document.getElementById('saport');
let executionCount = 0;
let execution2Count = 0;
let execution3Count = 0;
let execution4Count = 0;
let execution5Count = 0;
let execution6Count = 0;

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


function switch3Display() {
  execution3Count++;

  const firstId = `show-3first${execution3Count}`;
  
  sap2ort.insertAdjacentHTML(
    'afterend',
    `<p id="${firstId}"><ins class="adsbygoogle" style="display:inline-block;width:336px;height:280px" data-ad-client="ca-pub-5005673256143644" data-ad-slot="3979485526"><!-- --></ins></p>`
  );
}

function switch3Display2() {
  const currentId = `show-3first${execution3Count}`;
  const showFirst = document.getElementById(currentId);

  if (showFirst) {
    showFirst.classList.add("d-none");
  }
}

async function ma3in() {

  switch3Display();

  await tinyDelay();

(adsbygoogle = window.adsbygoogle || []).push({});

  await tinyDelay();

  switch3Display2();

await tinyDelay();

}

async function repeat3Main(times) {
  for (let i = 0; i < times; i++) {
    await ma3in();
  }
}


function switch4Display() {
  execution4Count++;

  const firstId = `show-4first${execution4Count}`;
  
  sap2ort.insertAdjacentHTML(
    'afterend',
    `<p id="${firstId}"><ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-5005673256143644" data-ad-slot="1277027499"><!-- --></ins></p>`
  );
}

function switch4Display2() {
  const currentId = `show-4first${execution4Count}`;
  const showFirst = document.getElementById(currentId);

  if (showFirst) {
    showFirst.classList.add("d-none");
  }
}

async function ma4in() {

  switch4Display();

  await tinyDelay();

(adsbygoogle = window.adsbygoogle || []).push({});

  await tinyDelay();

  switch4Display2();

await tinyDelay();

}

async function repeat4Main(times) {
  for (let i = 0; i < times; i++) {
    await ma4in();
  }
}


function switch5Display() {
  execution5Count++;

  const firstId = `show-5first${execution5Count}`;
  
  sap2ort.insertAdjacentHTML(
    'afterend',
    `<p id="${firstId}"><ins class="adsbygoogle" style="display:inline-block;width:300px;height:50px" data-ad-client="ca-pub-5005673256143644" data-ad-slot="6222505481"><!-- --></ins></p>`
  );
}

function switch5Display2() {
  const currentId = `show-5first${execution5Count}`;
  const showFirst = document.getElementById(currentId);

  if (showFirst) {
    showFirst.classList.add("d-none");
  }
}

async function ma5in() {

  switch5Display();

  await tinyDelay();

(adsbygoogle = window.adsbygoogle || []).push({});

  await tinyDelay();

  switch5Display2();

await tinyDelay();

}

async function repeat5Main(times) {
  for (let i = 0; i < times; i++) {
    await ma5in();
  }
}


function switch6Display() {
  execution6Count++;

  const firstId = `show-6first${execution6Count}`;
  
  sap2ort.insertAdjacentHTML(
    'afterend',
    `<p id="${firstId}"><ins class="adsbygoogle" style="display:inline-block;width:160px;height:600px" data-ad-client="ca-pub-5005673256143644" data-ad-slot="9893884112"><!-- --></ins></p>`
  );
}

function switch6Display2() {
  const currentId = `show-6first${execution6Count}`;
  const showFirst = document.getElementById(currentId);

  if (showFirst) {
    showFirst.classList.add("d-none");
  }
}

async function ma6in() {

  switch6Display();

  await tinyDelay();

(adsbygoogle = window.adsbygoogle || []).push({});

  await tinyDelay();

  switch6Display2();

await tinyDelay();

}

async function repeat6Main(times) {
  for (let i = 0; i < times; i++) {
    await ma6in();
  }
}


async function hyouji() {

  await repeat2Main(60);

  await tinyDelay();

  await repeat3Main(60);

  await tinyDelay();

  await repeat4Main(60);

  await tinyDelay();

  await repeat5Main(60);

  await tinyDelay();

  await repeat6Main(60);

  await tinyDelay();

  await repeatMain(300);

}


hyouji();


setTimeout(() => {
  repeatMain(300);
}, 500);

