import React, { useState } from "react";
import "./styles.css";

const musicDictionary = {
  Pop: [
    {
      name: "Positions by Ariana Grande",
      rating: "4.9/5"
    },
    {
      name: "Blinding Lights (with ROSALIA)",
      rating: "5/5"
    },
    {
      name: "Surrender by Natalie Taylor",
      rating: "5/5"
    },
    {
      name: "Sofia by Clairo",
      rating: "5/5"
    },
    {
      name: "Boss Bitch by Doja Cat",
      rating: "5/5"
    },
    {
      name: "Let me Down Slowly",
      rating: "5/5"
    }
  ],
  Telugu: [
    {
      name: "Kaatuka Kanule by G.V.Prakash",
      rating: "5/5"
    },
    {
      name: "Aakaasam Nee Haddhu Ra by G.V.Prakash",
      rating: "5/5"
    },
    {
      name: "Butta Bomma by Armaan Malik",
      rating: "5/5"
    },
    {
      name: "Hoyna Hoyna by Anirudh",
      rating: "4.9/5"
    },
    {
      name: "Nilavadhe by S.P.B.",
      rating: "5/5"
    },
    {
      name: "Mustafa Mustafa by A.R. Rahman",
      rating: "5/5"
    }
  ],
  Hindi: [
    {
      name: "Zara Zara by Bombay Jayashri",
      rating: "5/5"
    },
    {
      name: "Humraah by Sachet Tandon",
      rating: "4.7/5"
    },
    {
      name: "Kisi Aur Naal by Asees Kaur",
      rating: "4/5"
    },
    {
      name: "Humnava Mere by Jubin Nautiyal",
      rating: "5/5"
    },
    {
      name: "Hawa Banke by Darshan Raval",
      rating: "4.8/5"
    },
    {
      name: "Jo Tu Na Mila by Asim Azhar",
      rating: "5/5"
    }
  ],
  Punjabi: [
    {
      name: "Khaab by Akhil",
      rating: "5/5"
    },
    {
      name: "Prada by Jass Manak",
      rating: "5/5"
    },
    {
      name: "I Love You by Akull",
      rating: "5/5"
    },
    {
      name: "Na Ja by Pav Dharia",
      rating: "4.9/5"
    },
    {
      name: "Lahore by Guru Randhawa",
      rating: "4.8/5"
    },
    {
      name: "The Wakhra Song by Navv Inder",
      rating: "4.6/5"
    }
  ],
  Tamil: [
    {
      name: "Pogiren by Mugen",
      rating: "5/5"
    },
    {
      name: "Kanne Kanne by Anirudh",
      rating: "4.8/5"
    },
    {
      name: "Orasaadha by Vivek-Mervin",
      rating: "4.9/5"
    },
    {
      name: "Othaiyadi Pathayila by Anirudh",
      rating: "5/5"
    },
    {
      name: "Rowdy Baby by Yuvan",
      rating: "5/5"
    },
    {
      name: "Vaseegara by Bomaby Jayashri",
      rating: "5/5"
    }
  ],
  KPop: [
    {
      name: "Best Luck by Chen",
      rating: "5/5"
    },
    {
      name: "Ko Ko Bop by EXO",
      rating: "5/5"
    },
    {
      name: "Some by BOL4",
      rating: "5/5"
    },
    {
      name: "Maria by Hwasa",
      rating: "5/5"
    },
    {
      name: "Stay With Me by Chanyeol, Punch",
      rating: "5/5"
    },
    {
      name: "LOVE by Lyn, Hanhae",
      rating: "5/5"
    }
  ]
};

var musicIKnow = Object.keys(musicDictionary);

export default function App() {
  const [selectGenre, setGenre] = useState("Pop");

  function musicClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>Music Recommender</h1>
      <h3> Welcome </h3>
      <p> Let's dive into my 2020 music-wrapper.</p>
      <h5> Select any genre to get started.</h5>
      {musicIKnow.map(function (genre) {
        return (
          <button
            onClick={() => musicClickHandler(genre)}
            style={{ fontSize: "1rem" }}
            key={genre}
          >
            {genre}{" "}
          </button>
        );
      })}
      <ul>
        {musicDictionary[selectGenre].map(function (music) {
          return (
            <li key={music.name}>
              {" "}
              <p style={{ fontSize: "17px", fontWeight: "bolder" }}>
                {music.name}
              </p>
              <p style={{ fontSize: "14px", fontWeight: "normal" }}>
                Rating : {music.rating}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
