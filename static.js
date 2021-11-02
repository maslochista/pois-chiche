const navbar = () => {
    document.getElementById("navbar").innerHTML = `
      <button onclick="location.href='index.html'">HOME</button>
      <button onclick="location.href='sale.html'">SALE</button>
      <button onclick="location.href='womens.html'">WOMEN</button>
      <button onclick="location.href='mens.html'">MENS</button>
      <button onclick="location.href='about.html'">ABOUT</button>
      `
}

const sidebar = () => {
    document.getElementById("side-bar").innerHTML = `
    <button onclick="handleSort()">Sort</button>
      <ul class="hidden" id="sort-list">
        <button id="sort-up">Price Up</button>
        <button id="sort-down">Price Down</button>
      </ul>
      <button onclick="handleFilter()">Filter</button>
      <ul class="hidden" id="filter-list">
        <span><input type="checkbox" id="filter-S" />S</span>
        <span><input type="checkbox" id="filter-M" />M</span>
        <span><input type="checkbox" id="filter-L" />L</span>
      </ul>
      <button>Tops</button>
      <button>Bottoms</button>
      <button>Other</button>
      `
}