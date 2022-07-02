class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>         
            .search-bar {
                margin: auto;
                padding: 2rem;
                text-align: center;
            }
            
            .search-bar input{
                margin: auto;
                background-color: transparent;
                border: none;
                padding: 1rem;
                text-align: center;
                transition: 0.3s;
                cursor: pointer;
                border-bottom: 3px solid #cdcdcd;
                color: snow;
            }
            
            .search-bar input:hover{
                border-bottom: 3px solid #1EADFF;
            }
            
            
            ::placeholder {
                color: snow;
                font-size: 15px;
            }

            @media screen and (max-width: 660px) {
                .search-bar input{
                    width: 100%;
                }
            }

            @media screen and (min-width: 700px) {          
                .search-bar input{
                    width: 30%;
                }
            
            }
        </style>
        <div class="search-bar">
            <input type="search" id="searchHotel" name="hotelName" placeholder="Search Hotel...">
        </div>`;
  }
}

customElements.define('search-bar', SearchBar);
