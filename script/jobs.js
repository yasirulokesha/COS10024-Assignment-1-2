function apply(item) {
    item.addEventListener("click", function () {
        var ref = item.nextElementSibling;
        sessionStorage.setItem("RefNo", ref.value);
    })
}

function init() {
    var applyLink = document.querySelectorAll('.jobApply');
    applyLink.forEach(apply);
}

window.onload = init;