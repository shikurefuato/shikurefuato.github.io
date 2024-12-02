function sonoiti9(){ 
return new Promise((resolve) => {
    setTimeout(() => {

const showFirst = document.querySelector('.kakushitei9');

const showAds = document.querySelector('.kierungo9');

showAds.classList.remove("adsbygoogle");
showAds.classList.remove("kierungo9");
showFirst.classList.add("d-none");
showFirst.classList.remove("kakushitei9");

      resolve();
    }, 100);
  });

} 

async function main9() {
    if (isPageLoaded) {
        return;
    }

sap2ort.insertAdjacentHTML('afterend', '<p class="kakushitei9"><ins class="adsbygoogle kierungo9" style="display:inline-block;width:250px;height:250px" data-ad-client="ca-pub-5005673256143644" data-ad-slot="3984125468"><!-- --></ins></p>');

(adsbygoogle = window.adsbygoogle || []).push({});

    await sonoiti9();

main9();
}


main9();