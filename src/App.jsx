function App() {
  return (
      <div className="app">
        <section id="content">
          <header>
          <h1>My Tunes</h1>
          </header>

          <main>
            <div className="container">
            <img className="img" src="https://www.fantasticman.com/content/uploads/2024/03/Tyler_the_Creator_1_FM28-768x886.jpg" alt="" />
            <div className="info">
            <h3>Tyler, The Creator</h3>
            <details name="album1">
              <summary>Flower Boy</summary>
              <ol>
                <li>"Foreword"</li>
                <li>"See You Again"</li>
                <li>"Garden Shed"</li>
                <li>"Where This Flower Blooms"</li>
                <li>"Pothole"</li>
                <li>"Glitter"</li>
                <li>"Boredom"</li>
                <li>"Droppin' Seeds"</li>
                <li>"November"</li>
                <li>"Sometimes..."</li>
                <li>"Who Dat Boy"</li>
                <li>"I Ain't Got Time!"</li>
                <li>"911/Mr. Lonely"</li>
                <li>"Enjoy Right Now, Today"</li>
              </ol>
            </details>
  

            <details name="album2">
              <summary>Igor</summary>
              <ol>
                <li>"IGOR'S THEME"</li>
                <li>"EARFQUAKE"</li>
                <li>"I THINK"</li>
                <li>"EXACTLY WHAT YOU RUN FROM YOU END UP CHASING"</li>
                <li>"RUNNING OUT OF TIME"</li>
                <li>"NEW MAGIC WAND"</li>
                <li>"A BOY IS A GUN*"</li>
                <li>"PUPPET"</li>
                <li>"WHAT'S GOOD"</li>
                <li>"GONE, GONE/THANK YOU"</li>
                <li>"I DONT LOVE YOU ANYMORE"</li>
                <li>"ARE WE STILL FRIENDS"</li>
              </ol>
            </details>
            </div>
            </div>
          </main>
        </section>
        <footer>
           
        </footer>
      </div>
  );
}

export default App;
