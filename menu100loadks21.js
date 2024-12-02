function sonoiti21(){ 
return new Promise((resolve) => {
    setTimeout(() => {

const showFirst = document.querySelector('.kakushitei21');

const showAds = document.querySelector('.kierungo21');

showAds.classList.remove("adsbygoogle");
showAds.classList.remove("kierungo21");
showFirst.classList.add("d-none");
showFirst.classList.remove("kakushitei21");

      resolve();
    }, 100);
  });

} 

async function main21() {
    if (isPageLoaded) {
        return;
    }

sap2ort.insertAdjacentHTML('afterend', '<p class="kakushitei21"><ins class="adsbygoogle kierungo21"
     style="display:inline-block;width:125px;height:125px"
     data-ad-client="ca-pub-5005673256143644"
     data-ad-slot="7415872505"><!-- --></ins></p>');

(adsbygoogle = window.adsbygoogle || []).push({});

    await sonoiti21();

main21();
}


main21();