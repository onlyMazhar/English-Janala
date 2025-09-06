const loadLeasons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((response) => response.json()) //
    .then((json) => displayLessons(json.data)); //
};

const loadWordLevel = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((json) => displayWordLevel(json.data));
};

const displayWordLevel = (words) => {
  console.log(words);
  const loadWordLevelContainer = document.getElementById(
    "loadWordLevelContainer"
  );
  loadWordLevelContainer.innerHTML = "";

  words.forEach((word) => {
    const wordDiv = document.createElement("div");
    wordDiv.innerHTML = `
        <div class="py-10 px-15 text-center bg-white rounded-xl flex flex-col gap-5 shadow-lg">
                <h2 class="font-bold text-3xl">${word.word}</h2>
                <p class="text-xl ">${word.pronunciation}</p>
                <h2 class="font-semibold text-3xl text-[#424249] mb-4">${word.meaning}</h2>
                <div class="flex justify-between">
                    <div class="bg-[#1a91ff1a] p-2 rounded-sm">
                        <i class="fa-solid fa-circle-info "></i>
                    </div>
                    <div class="bg-[#1a91ff1a] p-2 rounded-sm">
                        <i class="fa-solid fa-volume-high"></i>
                    </div>
                </div>
            </div>
        
        `;
    loadWordLevelContainer.appendChild(wordDiv);
  });
};

const displayLessons = (leasons) => {
  // console.log(leasons)

  // 1 get the perent container and empyt container with ''
  const container = document.getElementById("level-container");
  container.innerHTML = "";

  // 2 get every element
  for (const leason of leasons) {
    // console.log(leason);

    // 3 create element
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
                    <button onClick ="loadWordLevel(${leason.level_no})" class="btn btn btn-outline btn-primary ">
                    <i class="fa-solid fa-book-open"></i> Leason - ${leason.level_no}
                    </button>
        `;

    // 4 append chield in perent container
    container.appendChild(btnDiv);
  }
};

loadLeasons();
