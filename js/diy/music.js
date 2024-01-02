const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    fixed: true,
    audio: [
        {
			name: "MOM",
			artist: '是二智呀',
			url: 'http://music.163.com/song/media/outer/url?id=1433338551.mp3',
			cover: 'https://p2.music.126.net/xpLjGFEOzWFhs_-4iMsnNw==/109951165112858259.jpg?param=130y130',	
        },
        {
			name: "知我（抒情版）",
			artist: '尘ah',
			url: 'http://music.163.com/song/media/outer/url?id=1424343020.mp3',
			cover: 'https://p2.music.126.net/lk6TRXO6aS1mOjJUdrZReA==/109951164867820981.jpg?param=130y130',	
        },
    ]
});