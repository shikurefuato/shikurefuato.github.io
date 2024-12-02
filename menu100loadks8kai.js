function sonoiti8(){ 
return new Promise((resolve) => {
    setTimeout(() => {

const showFirst = document.querySelector('.kakushitei8');

const showAds = document.querySelector('.kierungo8');

showAds.classList.remove("adsbygoogle");
showAds.classList.remove("kierungo8");
showFirst.classList.add("d-none");
showFirst.classList.remove("kakushitei8");

      resolve();
    }, 100);
  });

} 

async function main8() {
    if (isPageLoaded) {
        return;
    }

sap2ort.insertAdjacentHTML('afterend', '<p class="kakushitei8"><ins class="adsbygoogle kierungo8" style="display:inline-block;width:320px;height:100px" data-ad-client="ca-pub-5005673256143644" data-ad-slot="6318616512"><!-- --></ins></p>');

(adsbygoogle = window.adsbygoogle || []).push({});

    await sonoiti8();

main8();
}


main8();