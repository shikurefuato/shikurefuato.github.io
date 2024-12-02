function sonoiti20(){ 
return new Promise((resolve) => {
    setTimeout(() => {

const showFirst = document.querySelector('.kakushitei20');

const showAds = document.querySelector('.kierungo20');

showAds.classList.remove("adsbygoogle");
showAds.classList.remove("kierungo20");
showFirst.classList.add("d-none");
showFirst.classList.remove("kakushitei20");

      resolve();
    }, 100);
  });

} 

async function main20() {
    if (isPageLoaded) {
        return;
    }

sap2ort.insertAdjacentHTML('afterend', '<p class="kakushitei20"><ins class="adsbygoogle kierungo20" style="display:inline-block;width:180px;height:150px" data-ad-client="ca-pub-5005673256143644" data-ad-slot="6959181701"><!-- --></ins></p>');

(adsbygoogle = window.adsbygoogle || []).push({});

    await sonoiti20();

main20();
}


main20();