const musicas = ["This must be the place - Talking Heads", "Friday I'm in love - The Cure", "Androgynous - The Replacements", "Frankly, Mr. Shankly - The Smiths", "Dancing in the Dark - Bruce Springsteen"]


//usando o while 

let i = 0

while(i < musicas.length){
    console.log(`"${i+1} - ${musicas[i]}"`)
    i++
}


//usando o for

for(let n = 0; n < musicas.length; n++){
    console.log(`"${n+1} - ${musicas[n]}"`)
}


