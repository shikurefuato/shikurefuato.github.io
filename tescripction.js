const ichi2sitei = document.getElementById('ichisitei');

let isPageLoaded = false;

function sonoiti(){ 
return new Promise((resolve) => {
    setTimeout(() => {

const showFirst = document.querySelector('.kakushitei');

const showAds = document.querySelector('.adsbygoogle');

showAds.classList.remove("adsbygoogle");
showFirst.classList.add("d-none");
showFirst.classList.remove("kakushitei");

      resolve();
    }, 3000);
  });

} 

async function main() {
    if (isPageLoaded) {
        console.log('ループを停止しました');
        return; // フラグがtrueなら、ループを停止
    }

ichi2sitei.insertAdjacentHTML('beforebegin', '<p class="kakushitei"><ins class="adsbygoogle" style="display: block;" data-ad-client="ca-pub-5005673256143644" data-ad-slot="2662431207" data-ad-format="auto" data-full-width-responsive="true"><!-- --></ins></p>');

(adsbygoogle = window.adsbygoogle || []).push({});

    await sonoiti(); // resolveが返されるまで待機

setTimeout(() => {

      main();
    }, 3000);
}


window.addEventListener('load', () => {
    setTimeout(() => {
        isPageLoaded = true;
        console.log('フラグがtrueになりました');
    }, 3000); // ページロード完了から秒待機
});



// main関数を呼び出す
main();