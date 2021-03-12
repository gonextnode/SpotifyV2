function Logo(src, title) {
  return /*html*/ `
    <div style="width: 150px; height: 50px">
        <a href="/"><img src="${src}" alt="${title}"></a>
    </div>
    `;
}

export { Logo };
