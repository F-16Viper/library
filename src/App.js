import "./conponent/header/header";
import "./App.css";
import Header from "./conponent/header/header";

function App() {
  
  const str = [
    
    {
      title: "Le seigneur des anneaux",
      author: "JRR Tolkien",
      date: "1954",
      note: 5,
      image:
        "https://fr.web.img3.acsta.net/medias/nmedia/18/35/14/33/18366630.jpg",
    },
    {
      title: "Fondation",
      author: "Isaac Asimov",
      date: "1951",
      note: 4.8,
      image:
        "https://images.leslibraires.ca/books/9782070360536/front/9782070360536_large.jpg",
    },
    {
      title: "Harry Potter",
      author: "JK Rowling",
      date: "19597",
      note: 4.9,
      image: "https://m.media-amazon.com/images/I/81m1s4wIPML.jpg",
    },
  ];

  return (
    <div className="App">
      {/*
      <Header />
      title="Dernier jour d'un condamné"
       name="Victor Hugo" 
       date="1829" 
       note="10/10" 
       img="vh.jpeg"
      />
      <Header  title="In the presence of absence"
       name="Mahmoud Darwish" 
       date="2006" 
       note="10/10" 
       img="mahmoud.jpeg"
         */}
      {str.map((str) => (
        <Header
          title={str.title}
          author={str.author}
          date={str.date}
          note={str.note}
          image={str.image}
        />
      ))}
    </div>
  );
}

export default App;
