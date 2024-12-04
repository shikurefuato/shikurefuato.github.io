const sap2ort = document.getElementById('saport');

let isPageLoaded = false;

function sonoiti1(){ 
return new Promise((resolve) => {
    setTimeout(() => {

const showFirst = document.querySelector('.kakushitei1');

const showAds = document.querySelector('.kierungo1');

showAds.classList.remove("adsbygoogle");
showAds.classList.remove("kierungo1");
showFirst.classList.add("d-none");
showFirst.classList.remove("kakushitei1");

      resolve();
    }, 100);
  });

} 

async function main1() {
    if (isPageLoaded) {
        return;
    }

sap2ort.insertAdjacentHTML('afterend', '<p class="kakushitei1"><ins class="adsbygoogle kierungo1" style="display: block;" data-ad-client="ca-pub-5005673256143644" data-ad-slot="2662431207" data-ad-format="auto" data-full-width-responsive="true"><!-- --></ins></p>');

(adsbygoogle = window.adsbygoogle || []).push({});

    await sonoiti1();

main1();
}


window.addEventListener('DOMContentLoaded', () => {
        isPageLoaded = true;
});


main1();