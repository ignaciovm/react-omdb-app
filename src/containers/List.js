import React from "react";

import Card from "../components/card/Card";


console.log(process.env.API)
// const API = 'http://www.omdbapi.com/?i=tt3896198&apikey=cd64ab8e';
const API = process.env.API

class List extends React.Component {

  constructor(){
    super();
    this.state = {
      data: [],
      searchTerm: '',
      error: '',
      loading: true
    }
  }

  async componentDidMount(){
    // const res = await fetch('../../assets/data.json')
    const res = await fetch(`${ API }&s=robot`)
    const resJson = await res.json()
    console.log(resJson);
    this.setState({ data: resJson.Search, loading: false })
  }

  async handleSubmit(e){
    e.preventDefault();
    if(!this.state.searchTerm){
      return this.setState({ error: 'Por favor escribrir un texto valido' })
    }
    // this.setState({ data: [] })
    const res = await fetch(`${ API }&s=${ this.state.searchTerm }`)
    const resJson = await res.json()
    if(resJson.Error){
      return this.setState({ error: resJson.Error })
    }
    console.log(resJson)
    this.setState({ data: resJson.Search, error: '', searchTerm: '' })
    
  }

  render(){

    const { data, loading } = this.state;

    if(loading){
      return(
        <h2 className="text-light">Loading...</h2>
      )
    }

    return (
      <>
        <div className="row">
          <div className="col-md-4 offset-md-4 p-4">
            <form onSubmit={ (e) => this.handleSubmit(e) } >
              <input 
                type="text" 
                className="form-control" 
                placeholder="Buscar" 
                onChange={ e => this.setState({ searchTerm: e.target.value }) } 
                value={ this.state.searchTerm }
                autoFocus
              />
            </form>
            <p className="text-light">{ this.state.error }</p>
          </div>
        </div>
        <div className="row">
          {
            data.map(movie => {
              return <Card movie={movie} key={movie.imdbID} />
            })
          }
        </div>
      </>
    )
  }

}

export default List