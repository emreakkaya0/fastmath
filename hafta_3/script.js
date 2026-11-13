function SayiEkle(buton){
    const girdiKutusu = document.getElementById("buton");
    girdiKutusu.value += buton;
}

function Temizle(){
    document.getElementById("buton").value="";
}

uzunluk = {"pm (Pikometre)" : 1e-12, 
            "nm (Nanometre)" : 1e-9,  
            "μm (Mikrometre)" : 1e-6, 
            "mm (Milimetre)" : 1e-3, 
            "cm (Santimetre)" : 1e-2, 
            "dm (Desimetre)" : 1e-1,
            "m (Metre)" : 1, 
            "dam (Dekametre)" : 1e1,
            "hm (Hektometre)" : 1e2, 
            "km (Kilometre)" : 1e3, 
            "ft (Feet)" : 0.3048}

alan = {"pm² (Pikometrekare)" : 1e-24, 
            "nm² (Nanometrekare)" : 1e-18,  
            "μm² (Mikrometrekare)" : 1e-12, 
            "mm² (Milimetrekare)" : 1e-6, 
            "cm² (Santimetrekare)" : 1e-4, 
            "dm² (Desimetrekare)" : 1e-2,
            "m² (Metrekare)" : 1, 
            "dam² (Dekametrekare)" : 1e2,
            "hm² (Hektometrekare)" : 1e4, 
            "km² (Kilometrekare)" : 1e6, 
            "ft² (Feetkare)" : 0.09290304}

            
hacim = {"pm³ (Pikometreküp)" : 1e-36, 
            "nm³ (Nanometreküp)" : 1e-27,  
            "μm³ (Mikrometreküp)" : 1e-18, 
            "mm³ (Milimetreküp)" : 1e-9, 
            "cm³ (Santimetreküp)" : 1e-6, 
            "dm³ (Desimetreküp)" : 1e-3,
            "m³ (Metreküp)" : 1, 
            "dam³ (Dekametreküp)" : 1e3,
            "hm³ (Hektometreküp)" : 1e6, 
            "km³ (Kilometreküp)" : 1e9, 
            "ft³ (Feetküp)" : 0.028316846592}




function Convert(birim,input_id,output_id,amount_id){
    let amount = document.getElementById(amount_id);
    let input = document.getElementById(input_id);
    let output = document.getElementById(output_id);
    let ResultBox = document.getElementById("result");

    let giris = input.value;
    let cikis = output.value;
    let deger = amount.value;
    let result = deger*(birim[giris]/birim[cikis]);
    ResultBox.textContent = result;
}


