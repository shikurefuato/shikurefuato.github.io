function sonoiti23(){ 
return new Promise((resolve) => {
    setTimeout(() => {

const showFirst = document.querySelector('.kakushitei23');

const showAds = document.querySelector('.kierungo23');

showAds.classList.remove("adsbygoogle");
showAds.classList.remove("kierungo23");
showFirst.classList.add("d-none");
showFirst.classList.remove("kakushitei23");

      resolve();
    }, 100);
  });

} 

async function main23() {
    if (isPageLoaded) {
        return;
    }

sap2ort.insertAdjacentHTML('afterend', '<p class="kakushitei23"><ins class="adsbygoogle kierungo23" style="display:inline-block;width:120px;height:240px" data-ad-client="ca-pub-5005673256143644" data-ad-slot="6489803647"><!-- --></ins></p>');

(adsbygoogle = window.adsbygoogle || []).push({});

    await sonoiti23();

main23();
}


main23();