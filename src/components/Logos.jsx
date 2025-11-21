const logos = [
  'https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png',
  'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/3/3a/Netflix_2015_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/0/08/Spotify_logo_with_text.svg',
];

export default function Logos(){
  return (
    <section className="py-14 border-y border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-white/60 text-sm mb-6">Trusted by modern teams</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-70">
          {logos.map((src, i) => (
            <img key={i} src={src} alt="logo" className="mx-auto h-8 object-contain" />
          ))}
        </div>
      </div>
    </section>
  );
}
