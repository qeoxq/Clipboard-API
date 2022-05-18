document.getElementById("copy-btn").addEventListener("click", () => {
    navigator.clipboard.writeText(document.getElementById("copy-box").value)
})

document.getElementById("paste-btn").addEventListener("click", () => {
    navigator.clipboard.readText().then(
        clipText => document.getElementById("paste-box").value = clipText
    )
})