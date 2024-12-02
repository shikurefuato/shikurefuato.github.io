function sonoiti10(){ 
return new Promise((resolve) => {
    setTimeout(() => {

const showFirst = document.querySelector('.kakushitei10');

const showAds = document.querySelector('.kierungo10');

showAds.classList.remove("adsbygoogle");
showAds.classList.remove("kierungo10");
showFirst.classList.add("d-none");
showFirst.classList.remove("kakushitei10");

      resolve();
    }, 100);
  });

} 

async function main10() {
    if (isPageLoaded) {
        return;
    }

sap2ort.insertAdjacentHTML('afterend', '<p class="kakushitei10"><ins class="adsbygoogle kierungo10"
     style="display:inline-block;width:200px;height:200px"
     data-ad-client="ca-pub-5005673256143644"
     data-ad-slot="1374375624"><!-- --></ins></p>');

(adsbygoogle = window.adsbygoogle || []).push({});

    await sonoiti10();

main10();
}


main10();