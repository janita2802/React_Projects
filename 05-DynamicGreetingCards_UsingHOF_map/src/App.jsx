import image1 from './assets/W_image1.jpg';
import image2 from './assets/W_image3.jpg';
import image3 from './assets/M_image1.jpg';
import image4 from './assets/W_image2.jpg';
import image5 from './assets/W_image4.jpg';
import image6 from './assets/M_image2.jpg';
import image7 from './assets/M_image3.jpg';


const carddata = [
  {greeting: "Happy Birthday!", name: "Janita", img:image1, wish:"Wishing you a day filled with love, laughter, and joy. May all your dreams come true!"},
  {greeting: "Good Morning..", name: "Luce", img:image2, wish:"Wishing you a day full of positive vibes and wonderful moments. Have a great morning!"},
  {greeting: "Good Afternoon..", name: "Mickel", img:image3, wish:"Hope you're having a productive day. May the rest of your afternoon be as awesome as you are!"},
  {greeting: "Good Evening..", name: "Jane", img:image4, wish:"Wishing you a peaceful evening filled with relaxation and happiness. Enjoy your time!"},
  {greeting: "Happy Anniversary!!", name: "Rachel",img:image5, wish:"Congratulations on another year of love and happiness. Wishing you many more years of joy together!"},
  {greeting: "Merry Christmas..!", name: "John", img:image6, wish:"May your Christmas be filled with love, joy, and all the things that bring happiness. Have a wonderful holiday!"},
  {greeting: "Good Day!", name: "Bunny", img:image7, wish:"Wishing you a day that's as bright and amazing as you are. Have a fantastic day ahead!"}
];


function App() {
  return (
    <div className='cardContainer flex flex-wrap gap-3 my-5 items-center justify-center h-screen'>
      {carddata.map((data, index)=>(
        <GreetingCard
        key={index}
        img={data.img}
        greeting={data.greeting}
        name={data.name}
        wish={data.wish}
        />
      ))}   
    </div>
  )
}

function GreetingCard({greeting, name, img, wish}){
  return(
    <div className='card border-[3px]  flex h-[230px] w-[400px] bg-slate-200 rounded-xl  items-center shadow-custom-blue'>
      <img src={img} alt={name} className='cardImage rounded-full w-[100px] h-[100px]'></img>
      <div className=' flex flex-col items-center justify-start'>
        <h2 className='font-bold text-lg mb-1'>{greeting}</h2>
        <h3 className='font-semibold text-md mb-2'>To: {name}</h3>
        <p className='text-sm my-1 mx-2 text-center'>{wish}</p>  
      </div> 
    </div>
  )

}

export default App