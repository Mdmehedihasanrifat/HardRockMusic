const GetLyrics=(artist,title)=>{
console.log(artist,title);
const url=`https://api.lyrics.ovh/v1/${artist}/${title}`
    fetch(url)
        .then(res=>res.json())
        .then(data=> {
            console.log(data)
            let divL = document.getElementById('Lyrics');
            divL.innerText = data.lyrics;


        })


}
const displaySong=(Songs)=>{

    const div=document.getElementById('song-Container');
    div.innerHTML='';
Songs.forEach(song=>{
    const internalDiv=document.createElement('div');
    internalDiv.className="single-result row align-items-center my-3 p-3";
let songTitle=song.title;
const showSong=`  
                    <div class="col-md-9">
                        <h3 class="lyrics-name">${songTitle}</h3>
                        <p class="author lead">Album by <span>${song.artist.name}</span></p>
                    </div>
                    
                    <audio controls>
                    <source src="${song.preview}" type="audio/mpeg">
                    
                                    
                </audio>
                    <div class="col-md-3 text-md-right text-center">
                        <button onclick="GetLyrics('${song.artist.name}','${songTitle}')" class="btn btn-success">Get Lyrics</button>
                    </div>
                </div>`


internalDiv.innerHTML=showSong;
   div.appendChild(internalDiv);
})
}
const searchSong=()=>{

    let song=document.getElementById('SongSearch').value;

    console.log(song);
   let url=(`https://api.lyrics.ovh/suggest/${song}`);

    console.log(url);

    fetch(url)
        .then(res=>res.json())
        .then(data=>displaySong(data.data))

}

let search=document.getElementById('search');


search.addEventListener('click',function (){
    searchSong();
});

