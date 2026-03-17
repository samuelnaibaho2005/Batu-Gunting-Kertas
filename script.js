const gameContainer = document.querySelector(".container"),
        youResult = document.querySelector('.you-result img'),
        botResult = document.querySelector('.bot-result img'),
        Hasil = document.querySelector('.hasil'),
        optionImages = document.querySelectorAll('.option-image');

// mengulangi setiap elemen pada gambar opsi
optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

    // menghapus gambar yang keselect sebelumnya
    optionImages.forEach((image2, index2) => {
        index !== index2 && image2.classList.remove("active");
    });

    gameContainer.classList.add("Start");
    
    let time = setTimeout(() =>{
        gameContainer.classList.remove("Start");
        
        //mengambil source gambar yang diklik
        let imageSrc = e.target.querySelector("img").src;
        youResult.src = imageSrc;
        
    
        let randomNumber = Math.floor(Math.random()*3);
    
        let botImages = ["image/fist.png", "image/hello.png", "image/two-fingers.png"];
        
        botResult.src = botImages[randomNumber];
    
        let botValue = ['R', 'P', 'S'][randomNumber]
        let youValue = ['R', 'P', 'S'][index]
    
        console.log(botValue)
        console.log(youValue)
    
        let outComes ={
            RR : 'ulang',
            RP : 'Bot',
            RS : 'Kamu',
            PP : 'ulang',
            PR : 'You',
            PS : 'Bot',
            SS : 'ulang',
            SR : 'Bot',
            SP : 'Kamu',
        };
        let outComeValue = outComes[youValue + botValue];
    
        Hasil.textContent = youValue === botValue ? "Tanding ulang" : `${outComeValue} Menang!!`
        console.log(outComeValue)
    },2500);
    });
});
