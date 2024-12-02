function sonoiti16(){ 
return new Promise((resolve) => {
    setTimeout(() => {

const showFirst = document.querySelector('.kakushitei16');

const showAds = document.querySelector('.kierungo16');

showAds.classList.remove("adsbygoogle");
showAds.classList.remove("kierungo16");
showFirst.classList.add("d-none");
showFirst.classList.remove("kakushitei16");

      resolve();
    }, 100);
  });

} 

async function main16() {
    if (isPageLoaded) {
        return;
    }

sap2ort.insertAdjacentHTML('afterend', '<p class="kakushitei16"><ins class="adsbygoogle kierungo16"
     style="display:inline-block;width:970px;height:250px"
     data-ad-client="ca-pub-5005673256143644"
     data-ad-slot="5040990605"><!-- --></ins></p>');

(adsbygoogle = window.adsbygoogle || []).push({});

    await sonoiti16();

main16();
}


main16();