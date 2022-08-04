import React, { Component } from 'react'

export default class TodoInput extends Component {
  render() {
    const {item, handleChange,handleSubmit,edititem}= this.props;
    return (
      <div className=''>
        <h4>
            Renseigné le champ suivant pour ajouter 
            une tâche à votre liste de chose à faire!
        </h4>
         <p>Top c'est parti 🚀</p>
        <div className="card card-body my-3">
          <form onSubmit={handleSubmit}>
          
          <input 
            type="text" 
            className="form-control text-capitalize"
            placeholder='Ajouter une tâche'
            value={item}
            onChange={handleChange}
            />
          <button className='btn btn-block btn-primary my-3 w-100 text-uppercase' type='submit'>Ajouter</button>
          </form>
        </div>
        
        
      </div>
    )
  }
}
