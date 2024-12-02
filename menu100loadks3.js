function sonoiti3(){ 
return new Promise((resolve) => {
    setTimeout(() => {

const showFirst = document.querySelector('.kakushitei3');

const showAds = document.querySelector('.kierungo3');

showAds.classList.remove("adsbygoogle");
showAds.classList.remove("kierungo3");
showFirst.classList.add("d-none");
showFirst.classList.remove("kakushitei3");

      resolve();
    }, 100);
  });

} 

async function main3() {
    if (isPageLoaded) {
        return;
    }

sap2ort.insertAdjacentHTML('afterend', '<p class="kakushitei3"><ins class="adsbygoogle kierungo3"
     style="display:inline-block;width:336px;height:280px"
     data-ad-client="ca-pub-5005673256143644"
     data-ad-slot="3979485526"><!-- --></ins></p>');

(adsbygoogle = window.adsbygoogle || []).push({});

    await sonoiti3();

main3();
}


main3();