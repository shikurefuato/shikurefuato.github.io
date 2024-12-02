function sonoiti18(){ 
return new Promise((resolve) => {
    setTimeout(() => {

const showFirst = document.querySelector('.kakushitei18');

const showAds = document.querySelector('.kierungo18');

showAds.classList.remove("adsbygoogle");
showAds.classList.remove("kierungo18");
showFirst.classList.add("d-none");
showFirst.classList.remove("kakushitei18");

      resolve();
    }, 100);
  });

} 

async function main18() {
    if (isPageLoaded) {
        return;
    }

sap2ort.insertAdjacentHTML('afterend', '<p class="kakushitei18"><ins class="adsbygoogle kierungo18" style="display:inline-block;width:320px;height:480px" data-ad-client="ca-pub-5005673256143644" data-ad-slot="2119313794"><!-- --></ins></p>');

(adsbygoogle = window.adsbygoogle || []).push({});

    await sonoiti18();

main18();
}


main18();