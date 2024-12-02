function sonoiti6(){ 
return new Promise((resolve) => {
    setTimeout(() => {

const showFirst = document.querySelector('.kakushitei6');

const showAds = document.querySelector('.kierungo6');

showAds.classList.remove("adsbygoogle");
showAds.classList.remove("kierungo6");
showFirst.classList.add("d-none");
showFirst.classList.remove("kakushitei6");

      resolve();
    }, 100);
  });

} 

async function main6() {
    if (isPageLoaded) {
        return;
    }

sap2ort.insertAdjacentHTML('afterend', '<p class="kakushitei6"><ins class="adsbygoogle kierungo6"
     style="display:inline-block;width:160px;height:600px"
     data-ad-client="ca-pub-5005673256143644"
     data-ad-slot="9893884112"><!-- --></ins></p>');

(adsbygoogle = window.adsbygoogle || []).push({});

    await sonoiti6();

main6();
}


main6();