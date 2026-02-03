function postAd(){
    let ads = JSON.parse(localStorage.getItem("ads")) || [];

    let ad = {
        title: document.getElementById("title").value,
        price: document.getElementById("price").value,
        location: document.getElementById("location").value,
        year: document.getElementById("year").value,
        image: document.getElementById("image").value,
        desc: document.getElementById("desc").value
    };

    ads.push(ad);
    localStorage.setItem("ads", JSON.stringify(ads));

    alert("Ad Posted Successfully!");
    window.location.href = "listing.html";
}

function viewAd(index){
    localStorage.setItem("viewAd", index);
    window.location.href = "product.html";
}
