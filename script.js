function run(){
    var str = document.getElementById("input").value.toLowerCase().split("")
    var alpha = "abcdefghijklmnopqrstuvwxyz".split("")
    var num = "1234567890".split("")
    
    var alphabool = false, numbool = false, Abool = false, dotbool = false, combool = false, legthbool = true, spacebool = true
    
    const tlds = [".com", ".org", ".net", ".edu", ".gov", ".mil", ".int", ".info", ".biz", ".pro", ".name", ".coop", ".mobi", ".asia", ".eu", ".aero", ".cat", ".jobs", ".tel", ".travel"];
    
    var Acounting = 0
    for(let i = 0; i < str.length; i++){
        if(str[i]==" "){
            spacebool = false
        }
        if(str[i]=="@"){
            Abool = true
            if(str[i+1]=="."){
                Abool = false
            }
            Acounting++
    
            if(Acounting>1){
                Abool = false
            }
            
        }
        if(str[i]=="."){
            dotbool = true
            let com = str.slice(i).join("")
            combool = tlds.some((i)=> i==com)
    
            if(str[i+1]=="."){
                dotbool = false
            }
            
        }
        for(let j = 0; j < alpha.length; j++){
            if(str[i]==alpha[j]){
                alphabool = true
            }
            
        }
        for(let j = 0; j < num.length; j++){
            
            if(str[i]==num[j]){
                console.log(i)
               numbool = true
            }
            
        }
    
    }
    if(str[str.length-1] == "."){
        dotbool = false
    }
    if(str[str.length-1] == "@" || str[0]=="@"){
        Abool = false
    }
    if(str.lenght>64){
        legthbool = false
    }
    if(alphabool && numbool && Abool && dotbool && combool && legthbool && spacebool){
        alert("valid")
        // console.log("valid")
    }else{
        alert("invalid")
        // console.log("invalid")
    }
}

// console.log(str)