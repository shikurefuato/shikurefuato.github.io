function sonoiti25(){ 
return new Promise((resolve) => {
    setTimeout(() => {

const showFirst = document.querySelector('.kakushitei25');

const showAds = document.querySelector('.kierungo25');

showAds.classList.remove("adsbygoogle");
showAds.classList.remove("kierungo25");
showFirst.classList.add("d-none");
showFirst.classList.remove("kakushitei25");

      resolve();
    }, 100);
  });

} 

async function main25() {
    if (isPageLoaded) {
        return;
    }

sap2ort.insertAdjacentHTML('afterend', '<p class="kakushitei25"><ins class="adsbygoogle kierungo25" style="display:inline-block;width:300px;height:1050px" data-ad-client="ca-pub-5005673256143644" data-ad-slot="8347752160"><!-- --></ins></p>');

(adsbygoogle = window.adsbygoogle || []).push({});

    await sonoiti25();

main25();
}


main25();