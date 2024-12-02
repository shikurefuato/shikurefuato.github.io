function sonoiti13(){ 
return new Promise((resolve) => {
    setTimeout(() => {

const showFirst = document.querySelector('.kakushitei13');

const showAds = document.querySelector('.kierungo13');

showAds.classList.remove("adsbygoogle");
showAds.classList.remove("kierungo13");
showFirst.classList.add("d-none");
showFirst.classList.remove("kakushitei13");

      resolve();
    }, 100);
  });

} 

async function main13() {
    if (isPageLoaded) {
        return;
    }

sap2ort.insertAdjacentHTML('afterend', '<p class="kakushitei13"><ins class="adsbygoogle kierungo13"
     style="display:inline-block;width:300px;height:600px"
     data-ad-client="ca-pub-5005673256143644"
     data-ad-slot="2413432033"><!-- --></ins></p>');

(adsbygoogle = window.adsbygoogle || []).push({});

    await sonoiti13();

main13();
}


main13();