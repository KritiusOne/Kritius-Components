import "./layout.css"
export const Layout: React.FC = ()=>{
  return (
    <div className="Layout">
      <header className="header bg:yellow">Header</header>
      <aside className="aside">Aside</aside>
      <main className="main">Main</main>
      <footer className="footer">Footer</footer>
    </div>
  )
}