function generate(){
        let quotes={
                "- George Bernard Shaw":'"Success does not consist in never making mistakes but in never making the same one a second time."',
                "- Leonardo da Vinci":'"Simplicity is the ultimate sophistication."',
                "- Confucius":'"There are three things which the superior man guards against. In youth...lust. When he is strong...quarrelsomeness. When he is old...covetousness."',
                "- Oscar Wilde":'"Always forgive your enemies; nothing annoys them so much"',
                "- Steve Jobs":'"Your time is limited, so don’t waste it living someone else’s life"',
                "- Lucius Annaeus Seneca":'"While we are postponing, life speeds by."',
                "- Nostradamus":'"Life is a series of choices."',
                

        }
        let authors=Object.keys(quotes);
        console.log(authors);
        
        let author=authors[Math.floor(Math.random()*authors.length)]; 
        console.log(author);
        let quote =quotes[author];

        document.getElementById("quote").innerHTML=quote;
        document.getElementById("author").innerHTML=author;
}