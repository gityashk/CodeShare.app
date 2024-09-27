export function previewInNewTab({ html, css, js }) {
    const newWindow = window.open();
    newWindow.document.write(`
        <html>
            <head>
                <style>${css}</style>
            </head>
            <body>
                ${html}
                <script>${js}</script>
            </body>
        </html>
    `);
}

export function downloadFile({ html, css, js }) {
    const blob = new Blob([`
        <html>
            <head>
                <style>${css}</style>
            </head>
            <body>
                ${html}
                <script>${js}</script>
            </body>
        </html>
    `], { type: 'text/html' });
    Object.assign(document.createElement('a'), {
        href: URL.createObjectURL(blob),
        download: 'index.html'
    }).click();
}
