const sap2ort = document.getElementById('saport');
let executionCount = 0; // 実行回数をカウントする変数

function switchDisplay() {
  executionCount++; // 実行回数をインクリメント

  const firstId = `show-first${executionCount > 1 ? executionCount : ''}`;
  
  sap2ort.insertAdjacentHTML(
    'afterend',
    `<p id="${firstId}"><ins class="adsbygoogle" style="display: block;" data-ad-client="ca-pub-5005673256143644" data-ad-slot="2662431207" data-ad-format="auto" data-full-width-responsive="true"><!-- --></ins></p>`
  );

  console.log(`Added element with id: ${firstId}`);
}

function switchDisplay2() {
  const currentId = `show-first${executionCount}`; // 最新のidを取得
  const showFirst = document.getElementById(currentId);

  if (showFirst) {
    showFirst.classList.add("d-none");
    console.log(`Added class 'd-none' to element with id: ${currentId}`);
  } else {
    console.log(`Element with id: ${currentId} not found`);
  }
}

function tinyDelay() {
  return Promise.resolve(); // わずかな遅延
}

async function main() {
  const prevExecutionCount = executionCount; // 現在の実行回数を保持
  switchDisplay();

  await tinyDelay();

(adsbygoogle = window.adsbygoogle || []).push({});

  await tinyDelay();

  const targetId = `show-first${prevExecutionCount + 1}`; // 新しく生成されたID
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.classList.add("d-none");
    console.log(`Added class 'd-none' to element with id: ${targetId}`);
  } else {
    console.log(`Element with id: ${targetId} not found`);
  }

await tinyDelay();

  await new Promise(resolve => setTimeout(resolve, 0));
}

async function repeatMain(times) {
  for (let i = 0; i < times; i++) {
    await main(); // 順次実行
  }
}

// 実行例: 3回繰り返し
repeatMain(78);
