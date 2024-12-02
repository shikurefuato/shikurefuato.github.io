function sonoiti24(){ 
return new Promise((resolve) => {
    setTimeout(() => {

const showFirst = document.querySelector('.kakushitei24');

const showAds = document.querySelector('.kierungo24');

showAds.classList.remove("adsbygoogle");
showAds.classList.remove("kierungo24");
showFirst.classList.add("d-none");
showFirst.classList.remove("kakushitei24");

      resolve();
    }, 100);
  });

} 

async function main24() {
    if (isPageLoaded) {
        return;
    }

sap2ort.insertAdjacentHTML('afterend', '<p class="kakushitei24"><ins class="adsbygoogle kierungo24" style="display:inline-block;width:120px;height:60px" data-ad-client="ca-pub-5005673256143644" data-ad-slot="2397954318"><!-- --></ins></p>');

(adsbygoogle = window.adsbygoogle || []).push({});

    await sonoiti24();

main24();
}


main24();