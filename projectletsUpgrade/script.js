let movies=[
{
    name:"Animal",
    poster:"https://m.media-amazon.com/images/I/91zTlD7AY1L._AC_UF1000,1000_QL80_.jpg",
    rating: 8,
    Description:"The film stars Ranbir Kapoor in the lead role alongside Anil Kapoor, Bobby Deol, Rashmika Mandanna, and Triptii Dimri. In the film, Ranvijay Singh, a violent man learns about an assassination attempt on his estranged father and sets out on a path of revenge and destruction."


},
{
     name:"JOKER",
     poster:"https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500",
     rating:8.4,
     Description:"During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure. In addition to being a clown at work, Arthur Fleck wants to perform stand-up comedy."
},
{
name:"FAST & FURIOUS",
Poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDLUTBTFtEVHIlwerHHZGohOYtgSvec3Azzw&usqp=CAU",
rating:6.5,
Description:" A heist crew driving three heavily modified Honda Civics hijack a semi-truck trailer carrying electronic goods and escape into the night along Terminal Island Freeway. Meanwhile, LAPD officer Brian O'Conner is sent undercover as part of a joint LAPD-FBI task force to locate the crew responsible."


},
{
    name:"Jawan",
    poster:"https://images.static-bluray.com/products/20/129973_5_large.jpg",
    rating:7,
    Description:" Azad is the jailer of a women's prison in Mumbai who hijacks a Mumbai Metro train with a group of six inmates: Lakshmi, Eeram, Ishkra, Kalki, Helena and Janhvi. He negotiates with NSG officer Narmada Rai to ask the Agriculture Minister to send ₹40,000 crore in exchange for the passengers' lives."
}
,


{
    name:"Brahmastra",
    poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hZTW45PKs7eJqqyKj8djWpjtpmg9KTMy7A&usqp=CAU",
    rating:7.8,
    Description:"A DJ with superpowers and his ladylove embark on a mission to protect the Brahmastra, a weapon of enormous energy, from dark forces closing in on them. A DJ with superpowers and his ladylove embark on a mission to protect the Brahmastra, a weapon of enormous energy, from dark forces closing in on them."

},
{

    name:"Batman",
    poster:"https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6408f6e7b5811271dc883aa8_batman-min.png",
    rating:7,
    Description:"On Halloween, Gotham City mayor Don Mitchell Jr. is murdered by the masked serial killer the Riddler. Reclusive billionaire Bruce Wayne, who has operated for two years as the vigilante Batman, investigates the murder alongside the Gotham City Police Department (GCPD)."

}


];

  




function searchMovie()
{
     let movieName =document.getElementById("search").value;
     if(movieName!=="")
     {
        let result = movies.filter(function(movie)
        {
            return movie.name.toUpperCase().includes(movieName.toUpperCase())
        })

        if(result.length==0)
        {
            console.log("movie does not found");
            alert("movie does not found");
        }

        displayMovie(result);
     }
     else{
        displayMovie(movies);
     }
}


function displayMovie(data)
{
let htmlString= ``
;
for(i=0;i<data.length;i++)
{
    htmlString=htmlString+`
    <div class="movie">
    <div class="overlay">
        <div class="video"></div>
        <div class="details">
            <h1><b>MOVIE</b>:${data[i].name}</h1>
              <h2><b>Imdb</b>:${data[i].rating}</h2>
            <h3><b>Description</b>:${data[i].Description}</h3>
        </div>
    </div>

    <img src="${data[i].poster}" alt="${data[i].name}" class="poster" >

</div>
    
    `
}
document.getElementById("movies").innerHTML= htmlString;


}

displayMovie(movies);