function sonoiti11(){ 
return new Promise((resolve) => {
    setTimeout(() => {

const showFirst = document.querySelector('.kakushitei11');

const showAds = document.querySelector('.kierungo11');

showAds.classList.remove("adsbygoogle");
showAds.classList.remove("kierungo11");
showFirst.classList.add("d-none");
showFirst.classList.remove("kakushitei11");

      resolve();
    }, 100);
  });

} 

async function main11() {
    if (isPageLoaded) {
        return;
    }

sap2ort.insertAdjacentHTML('afterend', '<p class="kakushitei11"><ins class="adsbygoogle kierungo11" style="display:inline-block;width:970px;height:90px" data-ad-client="ca-pub-5005673256143644" data-ad-slot="6410144102"><!-- --></ins></p>');

(adsbygoogle = window.adsbygoogle || []).push({});

    await sonoiti11();

main11();
}


main11();