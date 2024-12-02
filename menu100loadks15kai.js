function sonoiti15(){ 
return new Promise((resolve) => {
    setTimeout(() => {

const showFirst = document.querySelector('.kakushitei15');

const showAds = document.querySelector('.kierungo15');

showAds.classList.remove("adsbygoogle");
showAds.classList.remove("kierungo15");
showFirst.classList.add("d-none");
showFirst.classList.remove("kakushitei15");

      resolve();
    }, 100);
  });

} 

async function main15() {
    if (isPageLoaded) {
        return;
    }

sap2ort.insertAdjacentHTML('afterend', '<p class="kakushitei15"><ins class="adsbygoogle kierungo15" style="display:inline-block;width:300px;height:100px" data-ad-client="ca-pub-5005673256143644" data-ad-slot="4656451993"><!-- --></ins></p>');

(adsbygoogle = window.adsbygoogle || []).push({});

    await sonoiti15();

main15();
}


main15();