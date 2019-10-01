function renderOpeningTexts() {
    var addTextInterval = setInterval(function () {
        if (!document.querySelector(".overview__title") || document.querySelector(".mirilyu_pp")) return;

        var title = document.querySelector(".overview__title");
        var node1 = document.createElement("p");
        node1.className = 'mirilyu_pp';
        var textnode1 = document.createTextNode("נשארו עדיין בני נוער שאכפת להם מהפרטיות שלהם? 😊");
        node1.appendChild(textnode1);
        var node2 = document.createElement("p");
        node2.className = 'mirilyu_pp';
        var textnode2 = document.createTextNode("במעבר בתחנות המידע באתר פרטיול, תקבלו כלים לשלוט טוב יותר על המידע האישי והרגיש שלכם ברשת.");
        node2.appendChild(textnode2);
        title.appendChild(node1);
        title.appendChild(node2);

        var copyRight = document.createElement("p");
        copyRight.className = 'copyright_pp';
        copyRight.appendChild(document.createTextNode("תוצר זה פותח במסגרת פרויקט גמר תשע\"ט לתואר בפקולטה לטכנולוגיות למידה, HIT."));
        var body = document.getElementById("overview");
        body.appendChild(copyRight);

        clearInterval(addTextInterval)
    }, 500)
}

function renderAboutUsLink() {
    console.log("renderAboutUsLink called");

    var addAboutUsModalLinkInterval = setInterval(function () {
        if (!document.querySelector(".lesson-lists__list") || document.querySelector(".lesson-link__name--aboutUs")) return;

        var lessonLists = document.querySelector(".lesson-lists__list");
        var lessonListItem = document.querySelector(".lesson-lists__list li");

        var aboutUsItem = lessonListItem.cloneNode(true);
        aboutUsItem.querySelector(".lesson-link__name.brand--ui").innerHTML = "אודות";
        aboutUsItem.classList.add('lesson-link__name--aboutUs');

        lessonLists.appendChild(aboutUsItem);

        var aboutUsModal = document.getElementById("about-us-modal");

        aboutUsItem.addEventListener("click", function (e) {
            e.preventDefault();
            aboutUsModal.classList.add("show");
        })

        var auClose = document.getElementById("au-close");

        auClose.addEventListener("click", function () {
            aboutUsModal.classList.remove("show");
        });

        clearInterval(addAboutUsModalLinkInterval);
    }, 500);
}

renderOpeningTexts();
renderAboutUsLink();

window.onhashchange = function (e) {
    renderOpeningTexts();
    renderAboutUsLink();
}