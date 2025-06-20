'use client';

export default function VideoPlayer() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      
      {/* Primeiro vídeo */}
      <div className="w-full" style={{ position: 'relative', paddingTop: '177%' }}>
        <iframe 
          src="https://scripts.converteai.net/2c79ea2c-0266-44e6-8d6b-2e8d7d77116a/players/6854afa7004b68891fc8fece/embed.html"
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            border: 0,
            transform: 'scaleY(1.03)',
            transformOrigin: 'top'
          }}
          className="rounded-xl shadow-lg"
          id="ifr_684f725e963d10368ab243c7"
          allowFullScreen
          allow="autoplay; encrypted-media"
        />
      </div>

      {/* Segundo vídeo (aplica o mesmo scaleY) */}
      <div className="w-full" style={{ position: 'relative', paddingTop: '177%' }}>
        <iframe 
          src="https://scripts.converteai.net/2c79ea2c-0266-44e6-8d6b-2e8d7d77116a/players/684f71e59a50d8576c68a664/embed.html"
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            border: 0,
            transform: 'scaleY(1.03)',
            transformOrigin: 'top'
          }}
          className="rounded-xl shadow-lg"
          id="ifr_684f71e59a50d8576c68a664"
          allowFullScreen
          allow="autoplay; encrypted-media"
        />
      </div>
    </div>
  );
}

