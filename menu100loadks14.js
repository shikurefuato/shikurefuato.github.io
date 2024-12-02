function sonoiti14(){ 
return new Promise((resolve) => {
    setTimeout(() => {

const showFirst = document.querySelector('.kakushitei14');

const showAds = document.querySelector('.kierungo14');

showAds.classList.remove("adsbygoogle");
showAds.classList.remove("kierungo14");
showFirst.classList.add("d-none");
showFirst.classList.remove("kakushitei14");

      resolve();
    }, 100);
  });

} 

async function main14() {
    if (isPageLoaded) {
        return;
    }

sap2ort.insertAdjacentHTML('afterend', '<p class="kakushitei14"><ins class="adsbygoogle kierungo14"
     style="display:inline-block;width:300px;height:200px"
     data-ad-client="ca-pub-5005673256143644"
     data-ad-slot="3239428544"><!-- --></ins></p>');

(adsbygoogle = window.adsbygoogle || []).push({});

    await sonoiti14();

main14();
}


main14();