document.getElementById("copy-btn").addEventListener("click", e => {
    e.target.blur();
    navigator.clipboard.writeText(document.getElementById("copy-box").value)

})

document.getElementById("paste-btn").addEventListener("click", e => {
    e.target.blur();
    navigator.clipboard.readText().then(
        clipText => document.getElementById("paste-box").value = clipText
    )
})

document.getElementById("copy-picture-btn").addEventListener("click", e => {
    e.target.blur();
    fetch(document.getElementById("copy-picture").src)
        .then(response => response.blob())
        .then(data => {
            navigator.clipboard.write([
                new ClipboardItem({
                    'image/png': data
                })
            ])
        })
})

document.getElementById("paste-picture-btn").addEventListener("click", e => {
    e.target.blur();
    navigator.clipboard.read().then(
        data => {
            data[0].getType("image/png")
                .then(blob => {
                    document.getElementById("paste-picture").src = URL.createObjectURL(blob);
                })
                .catch(() => {
                    alert("Clipboard contains non-image data.");
                })
        }
    )
})