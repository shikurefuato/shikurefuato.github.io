const sap2ort = document.getElementById('saport');

function sonoiti(){ 
return new Promise((resolve) => {
    setTimeout(() => {

const showFirst = document.querySelector('.kakushitei');

const showAds = document.querySelector('.adsbygoogle');

showAds.classList.remove("adsbygoogle");
showFirst.classList.add("d-none");
showFirst.classList.remove("kakushitei");

      resolve();
    }, 10000);
  });

} 

async function main() {

sap2ort.insertAdjacentHTML('beforebegin', '<p class="kakushitei"><ins class="adsbygoogle" style="display: block;" data-ad-client="ca-pub-5005673256143644" data-ad-slot="2662431207" data-ad-format="auto" data-full-width-responsive="true"><!-- --></ins></p>');

(adsbygoogle = window.adsbygoogle || []).push({});

    await sonoiti();

}

main();