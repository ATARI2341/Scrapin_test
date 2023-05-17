const cheerio = require("cheerio");
const request = require("request-promise");
const urls = [
    'https://store.steampowered.com/app/753640/Outer_Wilds/',
    'https://store.steampowered.com/app/1062110/UNSIGHTED/',
    'https://store.steampowered.com/app/376210/The_Isle/'
];

// api clave steam 911C6FEC320C8DD422D8ACCCA16107FB

// obtener html de la pagina
async function consulta(direc){
    const $ = await request(
        
        {
    url: direc,
    transform: body => cheerio.load(body)
});


 const nombres = 
 $('.game_area_purchase_game_wrapper');

 if(nombres.find('.discount_final_price').html())
 printer(nombres);
 else 
 console.log(nombres.find('h1').first().text()+
 "\n no tiene rebaja");
    //console.log(nombres.html());
}
// ejecutando los ciclos
ciclos();
 function ciclos(){
urls.forEach(t => {
 consulta(t);    
});
}


//gameslistitems_GameName_22awl
 function printer(vari){
  
   const vari2 = 
   vari.find('.discount_final_price')
   .html().replace(/[^0-9]+/, "");

   if(vari2<1340)
   {
    // se obtiene el titulo del juego
   console.log(vari.find('h1').first().text());
    // se obtiene el precio del juego
   console.log(vari2);
}
}
