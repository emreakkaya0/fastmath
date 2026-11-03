function SayiEkle(buton){
    const girdiKutusu = document.getElementById("buton");
    girdiKutusu.value += buton;
}

function Temizle(){
    document.getElementById("buton").value="";
}

