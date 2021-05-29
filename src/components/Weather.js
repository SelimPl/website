import { Component } from "react";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameCity: "",
      city: "",
      temperature: "",
      feel_temp: "",
      temp_max: "",
      temp_min: "",
      time: "",
      weather: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      nameCity: e.target.value,
    });
  };

  handleSubmit = (event) => {
    //
    const text = this.state.nameCity;
    const urlS = `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&lang=pl&appid=14bdc19b32cf1ad7133e34e9d2e668a0`;

    // console.log(time);
    fetch(urlS).then((response) => {
      if (response.ok) {
        return response.json().then((data) => {
          console.log(data);

          this.setState({
            time: new Date().toLocaleDateString(),
            city: data.name,
            temperature: Math.floor(data.main.temp),
            feel_temp: Math.floor(data.main.feels_like),
            temp_max: Math.floor(data.main.temp_max),
            temp_min: Math.floor(data.main.temp_min),
            weather: data.weather[0].description,
          });
        });
      } else {
        console.log(`błąd`);
        this.setState({
          city: "Błędne Miasto Debilu !",
          temperature: "-",
          feel_temp: "-",
          temp_max: "-",
          temp_min: "-",
          time: "-",
          weather: "-",
        });
      }
    });

    event.preventDefault();
  };
  render() {
    return (
      <>
        <div className="container w-100">
          <form className="input-group mb-3 my-4" onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="Wpisz miasto..."
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              alue={this.state.value}
              onChange={this.handleChange}
            />
            <button
              className="btn btn-outline-secondary"
              type="submit"
              id="button-addon2"
            >
              Szukaj
            </button>
          </form>
          <div className="row my-5 ">
            <div className="col">
              <p className="lead fw-bold">Data: {this.state.time}</p>
            </div>
            <div className="col">
              <p className="lead fw-bold">Miasto: {this.state.city}</p>
            </div>
            <div className="col">
              <p className="lead fw-bold">
                Temperatura: {this.state.temperature}
              </p>
            </div>
            <div className="row">
              <div className="col">
                <p className="lead fw-bold">
                  Temperatura odczówalna: {this.state.feel_temp} &#8451;
                </p>
              </div>
              <div className="col">
                <p className="lead fw-bold">
                  Temperatura maksymalna: {this.state.temp_max} &#8451;
                </p>
              </div>
              <div className="col">
                <p className="lead fw-bold">
                  Temperatura minimalna: {this.state.temp_min} &#8451;
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="lead fw-bold">
                  Prognoza na dziś: {this.state.weather}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg">
              <div
                id="carouselExampleControls1"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="https://images.unsplash.com/photo-1583591749989-0d1e8c5bbf42?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdlYXRoZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://images.unsplash.com/photo-1579885172701-ed88a42c28d1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHdlYXRoZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://images.unsplash.com/photo-1593179782268-4c0155a34d0d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHdlYXRoZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls1"
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
                  data-bs-target="#carouselExampleControls1"
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
            <div className="col-sm my-5">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2VhdGhlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1599053189598-c15f53456025?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHdlYXRoZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1543226862-39202f29696f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHdlYXRoZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..." />
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
          </div>
        </div>
        <div
          className="footer"
          style={{
            marginTop: "5px",
            backgroundColor: "gray",
            width: "100%",
            textAlign: "center",
            padding: "18px",
          }}
        >
          Created and designed by Selim Pł &reg;
        </div>
      </>
    );
  }
}

export default Weather;
