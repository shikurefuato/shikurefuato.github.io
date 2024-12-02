function sonoiti2(){ 
return new Promise((resolve) => {
    setTimeout(() => {

const showFirst = document.querySelector('.kakushitei2');

const showAds = document.querySelector('.kierungo2');

showAds.classList.remove("adsbygoogle");
showAds.classList.remove("kierungo2");
showFirst.classList.add("d-none");
showFirst.classList.remove("kakushitei2");

      resolve();
    }, 100);
  });

} 

async function main2() {
    if (isPageLoaded) {
        return;
    }

sap2ort.insertAdjacentHTML('afterend', '<p class="kakushitei2"><ins class="adsbygoogle kierungo2" style="display:inline-block;width:728px;height:90px" data-ad-client="ca-pub-5005673256143644" data-ad-slot="3683800610"><!-- --></ins></p>');

(adsbygoogle = window.adsbygoogle || []).push({});

    await sonoiti2();

main2();
}


main2();