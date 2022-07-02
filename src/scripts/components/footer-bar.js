class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer class="main-footer">
      <div class="footer-container">
          <div class="footer-content">
              <h2>Dream Live</h2>
              <p>During the pandemic period for the last 2 years, many hotels were empty of visitors. Therefore, we strive to provide facilities such as providing hotel references.
              We hope this project can help increase turnover and visitors. Features in this program will include hotel listings, hotel search, complete hotel details, as well as bookmarks. We hope that more features will be added as the project progresses.
              What we emphasize in this application is that it is easy to use and user friendly. We prioritize user convenience so that it helps if used by people who are new to technology.</p>
          </div>
          <div class="footer-content">
              <h2>Contact Info</h2>
              <div class="footer-inner-content">
                  <div>
                      <h3>Phone</h3>
                      <p>+62 XXXX XXXX XXX</p>
                  </div>
                  <div>
                      <h3>Email Address</h3>
                      <p>admin@dreamlive.co.id</p>
                  </div>
              </div>
          </div>
          <div class="footer-content">
              <h2>Page Navigation</h2>
              <p><a href="#home">Home</a></p>
              <p><a href="/#/bookmark">Bookmark</a></p>
              <p><a href="/#/about-us">About Us</a></p>
          </div>
          <div class="footer-content">
              <h2>Follow Us</h2>
              <div class="footer-icon-container">
                  <div class="footer-icon">
                      <a href="#link-to-instagram"><i class="fa-brands fa-instagram"></i></a>
                  </div>
                  <div class="footer-icon">
                      <a href="#link-to-facebook"><i class="fa-brands fa-facebook-square"></i></a>
                  </div>
                  <div class="footer-icon">
                      <a href="#link-to-twitter"><i class="fa-brands fa-twitter"></i></a>
                  </div>
              </div>
          </div>
      </div>
      <div class="footer-bottom">
          Copyright &#169; 2022 - Dream Live
      </div>
    </footer>
      `;
  }
}

customElements.define('footer-bar', FooterBar);
