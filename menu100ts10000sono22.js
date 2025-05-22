function sonoiti2(){ 
return new Promise((resolve) => {
    setTimeout(() => {

const showFirst = document.querySelector('.kakushitei2');

showFirst.classList.add("d-none");
showFirst.classList.remove("kakushitei2");

      resolve();
    }, 100);
  });

} 

async function main2() {
    if (isPageLoaded) {
        console.log('ループを停止しました');
        sap2ort.insertAdjacentHTML('beforebegin', '<p class="kakushitei2"><ins class="adsbygoogle" style="display: block;" data-ad-client="ca-pub-5005673256143644" data-ad-slot="2662431207" data-ad-format="auto" data-full-width-responsive="true"><!-- --></ins></p>');
        (adsbygoogle = window.adsbygoogle || []).push({});
        return; // フラグがtrueなら、ループを停止
    }

sap2ort.insertAdjacentHTML('beforebegin', '<p class="kakushitei2"><ins class="adsbygoogle" style="display: block;" data-ad-client="ca-pub-5005673256143644" data-ad-slot="2662431207" data-ad-format="auto" data-full-width-responsive="true"><!-- --></ins></p>');

(adsbygoogle = window.adsbygoogle || []).push({});

    await sonoiti2(); // resolveが返されるまで待機

main2();
}




// main関数を呼び出す
main2();