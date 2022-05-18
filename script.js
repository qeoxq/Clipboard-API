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