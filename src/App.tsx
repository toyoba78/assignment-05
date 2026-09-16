
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Technologies from "./components/technologies/Technologies"
import { Suspense } from "react";
import type { Itechnologies } from "./types/technologies";
import Footer from "./components/Footer";


const technologiesFetch = async(): Promise<Itechnologies[]>=> {
 const res = await fetch(`${import.meta.env.BASE_URL}data.json`);
  const data = await res.json();
  return data;
};




function App() {
  const technologiesPromise = technologiesFetch()
  return (
    <>
      
    <Nav/>
    <Banner />
    <Suspense fallback={<h1>loading.....</h1>}>
    <Technologies technologiesPromise={technologiesPromise}/> 
    </Suspense>
     
    <Footer />

    </>
  );
}

export default App;