function sonoiti5(){ 
return new Promise((resolve) => {
    setTimeout(() => {

const showFirst = document.querySelector('.kakushitei5');

const showAds = document.querySelector('.kierungo5');

showAds.classList.remove("adsbygoogle");
showAds.classList.remove("kierungo5");
showFirst.classList.add("d-none");
showFirst.classList.remove("kakushitei5");

      resolve();
    }, 100);
  });

} 

async function main5() {
    if (isPageLoaded) {
        return;
    }

sap2ort.insertAdjacentHTML('afterend', '<p class="kakushitei5"><ins class="adsbygoogle kierungo5"
     style="display:inline-block;width:300px;height:50px"
     data-ad-client="ca-pub-5005673256143644"
     data-ad-slot="6222505481"><!-- --></ins></p>');

(adsbygoogle = window.adsbygoogle || []).push({});

    await sonoiti5();

main5();
}


main5();