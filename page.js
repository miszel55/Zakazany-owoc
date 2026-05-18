export default function Home() {
  const categories = ['Kobiety','Mężczyźni','Pary','Trójkąty']
  const tags = ['Klasyk','Oral','Anal','BDSM','Fetysz','Dominacja','Webcam','Dyskrecja']

  return (
    <main style={{padding:'20px',maxWidth:'1200px',margin:'0 auto'}}>
      <h1 style={{fontSize:'48px',color:'#ef4444'}}>ZakazanyOwoc</h1>
      <p style={{color:'#aaa',fontSize:'18px'}}>
        Portal randkowo-ogłoszeniowy
      </p>

      <div style={{display:'flex',flexWrap:'wrap',gap:'10px',marginTop:'30px'}}>
        {categories.map((c)=>(
          <button
            key={c}
            style={{
              padding:'12px 20px',
              borderRadius:'16px',
              border:'none',
              background:'#991b1b',
              color:'#fff'
            }}
          >
            {c}
          </button>
        ))}
      </div>

      <h2 style={{marginTop:'50px'}}>Popularne tagi</h2>

      <div style={{display:'flex',flexWrap:'wrap',gap:'10px'}}>
        {tags.map((tag)=>(
          <div
            key={tag}
            style={{
              padding:'10px 16px',
              border:'1px solid #444',
              borderRadius:'999px',
              color:'#ddd'
            }}
          >
            #{tag}
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop:'50px',
          background:'#111',
          borderRadius:'24px',
          padding:'30px'
        }}
      >
        <h2>Pierwsza wersja MVP online</h2>
        <p style={{color:'#aaa'}}>
          Rejestracja, profile, ogłoszenia i czat będą dodawane etapami.
        </p>
      </div>
    </main>
  )
}
