const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "2019", "2020", "2021", "2022"],
    datasets: [
      {
        label: "# of Heart Attacks(Thousands)",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const moonPath =
  "M20 28C20 43.464 28 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C28 0 20 12.536 20 28Z";

const sunPath =
  "M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z";

const darkMode = document.querySelector("#darkMode");

let toggle = false; /* CANT BE CONST SINCE WE NEED TO CHANGE VALUE */

/* WE NEED TO CLICK ON THE SUN */

darkMode.addEventListener("click", () => {
  /* USING addEventListener WE LET A PARTICULER FUNCTION () => RUN UPON A CLICK */
  /* WE NEED TO ANIMATE USING ANIME.JS */
  const timeline = anime.timeline({
    /* HERE WE SET UP THE TIMELINE */
    duration: 750,
    easing: "linear",
  });
  /* ADD DIFFERETN ANIMATION THE THE TIMELINE */
  timeline
    .add({
      /* BASICALLY WE ARE TARGETTIGN THE D VALUES OF THE SUN AND CHANMGIND IT TOO THE MOON */
      targets: ".sun",
      d: [
        {
          value: toggle ? sunPath : moonPath,
        },
      ],
    })

    .add(
      {
        targets: "#darkMode",
        rotate: 300,
      },
      "-= 350"
    )

    .add(
      {
        targets: ".section3",
        backgroundColor: toggle ? "rgb(250, 249, 246)" : "rgb(22, 22 , 22)",
        color: toggle ? "rgb(22, 22 , 22)" : "rgb(250, 249, 246)",
      },
      "-=350"
    );

  /* EVERYTIME WE CLICK THE SUN WE WANT TO TOGGLE */
  if (!toggle) {
    toggle = true;
  } else {
    toggle = false;
  }
});
