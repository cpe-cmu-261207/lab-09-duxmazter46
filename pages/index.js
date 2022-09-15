import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <div>
      <MainLayout>
        <div class="main">
          <div class="box rounded-5">
            <img
              class="image rounded-circle"
              width="50%"
              src="https://www.img.in.th/images/f199de1cda12d46856e1a3048974748b.jpg"
            />
            <h1>Teerit Youngmeesuk (Beckham)</h1>
            <h3>
              Hi, my name is Teerit Youngmeesuk. I'm graduated from The Prince
              Royal's College. I have been studying in Chiangmai University for
              2 years majoring in Computer Engineering. My hobby is watching
              cartoons and reading comics and I'm a hardcore-fan of Star Wars!
            </h3>
          </div>
        </div>

        <hr />
      </MainLayout>
    </div>
  );
}
