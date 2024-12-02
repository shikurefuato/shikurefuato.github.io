function sonoiti12(){ 
return new Promise((resolve) => {
    setTimeout(() => {

const showFirst = document.querySelector('.kakushitei12');

const showAds = document.querySelector('.kierungo12');

showAds.classList.remove("adsbygoogle");
showAds.classList.remove("kierungo12");
showFirst.classList.add("d-none");
showFirst.classList.remove("kakushitei12");

      resolve();
    }, 100);
  });

} 

async function main12() {
    if (isPageLoaded) {
        return;
    }

sap2ort.insertAdjacentHTML('afterend', '<p class="kakushitei12"><ins class="adsbygoogle kierungo12" style="display:inline-block;width:468px;height:60px" data-ad-client="ca-pub-5005673256143644" data-ad-slot="2209417903"><!-- --></ins></p>');

(adsbygoogle = window.adsbygoogle || []).push({});

    await sonoiti12();

main12();
}


main12();