class FooterTemplate extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
              <p>Made by hand with vim &lt;3
              <br>&copy; 2026 Katherine Gearhart<p>
            </footer>
        `;
    }
}
customElements.define("footer-template", FooterTemplate);

class HeadTemplate extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Kat's Photos</title>
                <link href="/style.css" rel="stylesheet" type="text/css" media="all">

                <!-- Inter Font -->
                <link rel="preconnect" href="https://rsms.me/">
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css">

                <link rel="icon" type="image/png" href="/icon/favicon/16.png" sizes="16x16">
                <link rel="icon" type="image/png" href="/icon/favicon/32.png" sizes="32x32">
                <link rel="icon" type="image/png" href="/icon/favicon/48.png" sizes="48x48">
                <link rel="icon" type="image/png" href="/icon/favicon/180.png" sizes="180x180">
                <link rel="icon" type="image/png" href="/icon/favicon/192.png" sizes="192x192">
                <link rel="icon" type="image/png" href="/icon/favicon/512.png" sizes="512x512">
                <link rel="icon" type="image/svg" href="/icon/favicon/favicon.svg">
            </head>
        `;
    }
}
customElements.define("head-template", HeadTemplate);

class HeaderTemplate extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <h1>Kat's Photos</h1>
                <a href="/"><img src="/icon/back.png"></a>
            </header>
        `;
    }
}
customElements.define("header-template", HeaderTemplate);
