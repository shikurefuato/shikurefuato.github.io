const sap2ort = document.getElementById('saport');

let isPageLoaded = false;

function sonoiti(){ 
return new Promise((resolve) => {
    setTimeout(() => {

const showFirst = document.querySelector('.kakushitei');
const showLater = document.querySelector('.shiteiokikaeshitei');
const showAds = document.querySelector('.adsbygoogle');

function switchDisplay() {
  showAds.classList.remove("adsbygoogle");
  showFirst.classList.add("d-none");
  showFirst.classList.remove("kakushitei");
  showLater.classList.remove("d-none", "shiteiokikaeshitei");
}

switchDisplay();

      resolve();
    }, 100);
  });

} 

async function main() {
    if (isPageLoaded) {
        console.log('ループを停止しました');
        sap2ort.insertAdjacentHTML('beforebegin', '<p class="kakushitei"><ins class="adsbygoogle" style="display: block;" data-ad-client="ca-pub-5005673256143644" data-ad-slot="2662431207" data-ad-format="auto" data-full-width-responsive="true"><!-- --></ins></p>');
        (adsbygoogle = window.adsbygoogle || []).push({});
        return; // フラグがtrueなら、ループを停止
    }

sap2ort.insertAdjacentHTML('beforebegin', '<p class="kakushitei"><ins class="adsbygoogle" style="display: block;" data-ad-client="ca-pub-5005673256143644" data-ad-slot="2662431207" data-ad-format="auto" data-full-width-responsive="true"><!-- --></ins></p><p class="shiteiokikaeshitei d-none"><!-- --></p>');

(adsbygoogle = window.adsbygoogle || []).push({});

    await sonoiti(); // resolveが返されるまで待機

main();
}


window.addEventListener('load', () => {
    setTimeout(() => {
        isPageLoaded = true;
        console.log('フラグがtrueになりました');
    }, 100000); // ページロード完了から秒待機
});



// main関数を呼び出す
main();