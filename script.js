const loadLeasons = () => {

    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then((response) => response.json())
        .then((json) => displayLessons(json.data))
}

const displayLessons = (leasons) => {
    // console.log(leasons)

    // 1 get the perent container and empyt container with ''
    const container = document.getElementById('level-container');
    container.innerHTML = '';

    // 2 get every element
    for (const leason of leasons) {
        console.log(leason)

        // 3 create element
        const btnDiv = document.createElement('div');
        btnDiv.innerHTML = `
                    <button class="btn btn btn-outline btn-primary ">
                    <i class="fa-solid fa-book-open"></i> Leason - ${leason.level_no}
                    </button>
        `

        // 4 append chield in perent container
        container.appendChild(btnDiv);
    }


}
loadLeasons()
