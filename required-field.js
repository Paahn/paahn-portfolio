// required inputs were validated on page load, so add required attribute on submit

document.getElementById("submit-button").addEventListener("click", function(){
    document.querySelectorAll("input[data-required]").forEach(
        (e) => e.setAttribute('required', true)
    );
    document.querySelector("textarea[data-required]").setAttribute('required', true);
})