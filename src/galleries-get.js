import fifty from "./50_50.jpg";
import nemo from "./nemo.jpg";
import takeball from "./takeball.jpg";
import toystory from "./toystory.jpeg";
import tsmm from "./tsmm.jpg";
import talk from "./hable_con_ella.jpg";

export default function getGalleries(){
    return [
      {id: '5050', name: '50/50', logo: fifty, details: 'And that true story is based on the experiences of “50/50” screenwriter Will Reiser, who was diagnosed with cancer at the age of 25 and survived it with the support of friends like Seth Rogen, who co-produced and stars in the movie opposite Gordon-Levitt.'},
      {id: 'findingnemo', name: 'Finding Nemo', logo: nemo, details: 'Finding Nemo is a 2003 American computer-animated adventure film produced by Pixar Animation Studios and released by Walt Disney Pictures. Written and directed by Andrew Stanton with co-direction by Lee Unkrich, the film stars the voices of Albert Brooks, Ellen DeGeneres, Alexander Gould, and Willem Dafoe.'},
      {id: 'taketheball', name: 'Take The Ball Pass The Ball', logo: takeball, details: 'Take the Ball, Pass the Ball is the definitive story of the greatest football team ever assembled. For four explosive years Pep Guardiola‘s Barça produced the greatest football in history, seducing fans around the world. In this exclusive, first-hand account of events between 2008 and 2012, the players themselves reveal the tension of the bitter Guardiola-Mourinho rivalry, the emotion of Abidal’s fight back from cancer to lift the European Cup and how Messi, the best footballer the world’s ever seen, was almost rejected by Barça as a 13-year-old.'},
      {id: 'toystory4', name: 'Toy Story 4', logo: toystory, details: "Toy Story 4 is a 2019 American computer-animated comedy film produced by Pixar Animation Studios for Walt Disney Pictures. It is the fourth installment in Pixar's Toy Story series, and the sequel to 2010's Toy Story 3."},
      {id: 'todosobre', name: 'Todo Sobre Mi Madre', logo: tsmm, details: "Pedro Almodóvar directed this story of a woman and her circle of friends who find themselves suffering a variety of emotional crises. Manuela (Cecilia Roth) is a single mother who has raised her son, Esteban (Eloy Azorín), to adulthood on her own and has come to emotionally depend on him. One night, Manuela and Esteban take in a production of A Streetcar Named Desire; after the show, Esteban is struck and killed by a passing motorist as he dashes into the street to get an autograph from Huma Rojo (Marisa Paredes), who played Blanche."},
      {id: 'hablecon', name: 'Hable Con Ella', logo: talk, details: "Talk to Her (Spanish: Hable con ella) is a 2002 Spanish drama written and directed by Pedro Almodóvar, and starring Javier Cámara, Darío Grandinetti, Leonor Watling, Geraldine Chaplin, and Rosario Flores. The film follows two men who form an unlikely friendship as they care for two women who are both in comas."},
    ];
  }