function sonoiti4(){ 
return new Promise((resolve) => {
    setTimeout(() => {

const showFirst = document.querySelector('.kakushitei4');

const showAds = document.querySelector('.kierungo4');

showAds.classList.remove("adsbygoogle");
showAds.classList.remove("kierungo4");
showFirst.classList.add("d-none");
showFirst.classList.remove("kakushitei4");

      resolve();
    }, 100);
  });

} 

async function main4() {
    if (isPageLoaded) {
        return;
    }

sap2ort.insertAdjacentHTML('afterend', '<p class="kakushitei4"><ins class="adsbygoogle kierungo4" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-5005673256143644" data-ad-slot="1277027499"><!-- --></ins></p>');

(adsbygoogle = window.adsbygoogle || []).push({});

    await sonoiti4();

main4();
}


main4();