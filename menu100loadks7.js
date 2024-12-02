function sonoiti7(){ 
return new Promise((resolve) => {
    setTimeout(() => {

const showFirst = document.querySelector('.kakushitei7');

const showAds = document.querySelector('.kierungo7');

showAds.classList.remove("adsbygoogle");
showAds.classList.remove("kierungo7");
showFirst.classList.add("d-none");
showFirst.classList.remove("kakushitei7");

      resolve();
    }, 100);
  });

} 

async function main7() {
    if (isPageLoaded) {
        return;
    }

sap2ort.insertAdjacentHTML('afterend', '<p class="kakushitei7"><ins class="adsbygoogle kierungo7"
     style="display:inline-block;width:320px;height:50px"
     data-ad-client="ca-pub-5005673256143644"
     data-ad-slot="2435443333"><!-- --></ins></p>');

(adsbygoogle = window.adsbygoogle || []).push({});

    await sonoiti7();

main7();
}


main7();