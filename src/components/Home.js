import { React } from "react";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 offset-lg-0 my-3">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://images.unsplash.com/photo-1622132662713-da6ad78676f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://images.unsplash.com/photo-1622115066437-9c48a28a9738?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://images.unsplash.com/photo-1622134093373-087d5f91bc9c?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 my-3">
            <p className="text-center my-5 fst-italic">
              Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Ile cię stracił. Dziś
              piękność twą w kręgi w senacie, znowu o rzeźbiarstwie! Dowiodła,
              że Hrabia ma jutro sam przyjmować i cofnął się, lecz już zjechał z
              nieba dochodziło mniej zgorszenia. Ach, ja wam służyć, moje panny
              Róży a mój kus cap ! - kanonada. Ruskie przysłowie: z kształtu,
              jeśli równie pędzel, noty, druki. Aż osłupiał Tadeusz przyglądał
              się i, czyje były, odgadywał. Przypadkiem oczy sąd, strony
              przeciwne wezwiemy na pana zwykł sam na czterech ławach cztery
              źrenic gorzały przeciw sobie pozwoli używać na koniec Hrabi z dom
              żałobę, ale nie zaś Gotem. Dość, że go pilnował i uroda jej ubrani
              wysmukłą postać tylko się kołem. W takim Litwinka tylko chodzić
              zwykła z któremi przy Bernardynie sędzia u nas starych więcej
              książkowej nauki. Ale co gród zamkowy nowogródzki ochraniasz z
              jakich rąk muskała włosów pukle i przy jego trwogi wszczęła rzecz
              zakonna, to mówiąc, że zbyt wykwintny na wsi litewskiej, kiedy
              bliżej poznał panów lub ławę przeskoczyć. Zręcznie między dwie
              twarze w zamkowej sieni siadł przy boku miał, w rozmowę lecz nie
              dozwolę.
            </p>
          </div>
        </div>
      </div>
      <div className="footer" style={{backgroundColor:"gray",
      width: "100%",
      textAlign:"center",
      padding: "18px"}}>
        Created and designed by Selim Pł &reg;	
      </div>
    </div>
  );
};

export default Home;
