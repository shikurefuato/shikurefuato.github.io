function sonoiti19(){ 
return new Promise((resolve) => {
    setTimeout(() => {

const showFirst = document.querySelector('.kakushitei19');

const showAds = document.querySelector('.kierungo19');

showAds.classList.remove("adsbygoogle");
showAds.classList.remove("kierungo19");
showFirst.classList.add("d-none");
showFirst.classList.remove("kakushitei19");

      resolve();
    }, 100);
  });

} 

async function main19() {
    if (isPageLoaded) {
        return;
    }

sap2ort.insertAdjacentHTML('afterend', '<p class="kakushitei19"><ins class="adsbygoogle kierungo19"
     style="display:inline-block;width:234px;height:60px"
     data-ad-client="ca-pub-5005673256143644"
     data-ad-slot="3476729123"><!-- --></ins></p>');

(adsbygoogle = window.adsbygoogle || []).push({});

    await sonoiti19();

main19();
}


main19();