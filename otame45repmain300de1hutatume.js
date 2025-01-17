let execution2Count = 0;

function switch2Display() {
  execution2Count++;

  const firstId = `show-2first${execution2Count}`;
  
  sap2ort.insertAdjacentHTML(
    'afterend',
    `<p id="${firstId}"><ins class="adsbygoogle" style="display: block;" data-ad-client="ca-pub-5005673256143644" data-ad-slot="2662431207" data-ad-format="auto" data-full-width-responsive="true"><!-- --></ins></p>`
  );
}

function switch2Display2() {
  const currentId = `show-2first${execution2Count}`;
  const showFirst = document.getElementById(currentId);

  if (showFirst) {
    showFirst.classList.add("d-none");
  }
}

function tiny2Delay() {
  return Promise.resolve();
}

async function repeat2Delay(times) {
  for (let i = 0; i < times; i++) {
    await tiny2Delay();
  }
}

async function ma2in() {

  switch2Display();

  await tiny2Delay();

(adsbygoogle = window.adsbygoogle || []).push({});

  await tiny2Delay();

  switch2Display2();

await tiny2Delay();

}

async function repeat2Main(times) {
  for (let i = 0; i < times; i++) {
    await ma2in();
  }
}


repeat2Main(300);