import { React, Component } from "react";


class Generator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surName: "",
      email: "",
      city: "",
      state: "",
      country: "",
      photo: "",
      isLoaded: false
    };
  }
  getRandom = () => {
    const url = "https://randomuser.me/api/";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          name: data.results[0].name.first,
          surName: data.results[0].name.last,
          email: data.results[0].email,
          city: data.results[0].location.city,
          state: data.results[0].location.state,
          country: data.results[0].location.country,
          photo: data.results[0].picture.large
        });
      });
  };
  render() {
    return (
        
          
        <div className="container">
           
          <div className="row">
            <div className="col-sm my-5">
              Imie: <p className="lead">{this.state.name}</p>
            </div>
            <div className="col-sm my-5">
              Nazwisko: <p className="lead">{this.state.surName}</p>
            </div>
            <div className="col-sm my-5">
              Email: <p className="lead">{this.state.email}</p>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-sm">
              Miasto: <p className="lead">{this.state.city}</p>
            </div>
            <div className="col-sm">
              Kraj: <p className="lead">{this.state.country}</p>
            </div>
            <div className="col-sm">
              Stan: <p className="lead">{this.state.state}</p>
            </div>
          </div>
          <div className="row">
              <div className="col-sm">
                  Zdjęcie: <img src={this.state.photo} alt="" />
              </div>
          </div>
                
          <button onClick={this.getRandom} className="btn btn-primary my-5 w-100">
            Losuj !
          </button>
        </div>
      
      
    );
  }
}

export default Generator;
