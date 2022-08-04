import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import './css/style.css'

class App extends Component {
  state = {
    items :[{id:1, title:"Se lever"}, {id:2, title:"Prendre le petit déjeuner"}],
    item:'',
    editItem:false
  };
  handleChange = e =>{
    console.log('handle change')
  };
  handleSubmit = e =>{
    console.log('tâche bien ajouté')
  };
  clearList = () =>{
    console.log('Liste vidé')
  };
  handleDelete = id =>{
    console.log(`tâche supprimé ${id}`)
  };
  handleEdit = id =>{
    console.log(`tâche édité ${id}`)
  };
  render(){
    return(
      <div className="container App">
        
        <TodoInput
        item={this.state.item}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        editItem = {this.state.editItem}
        />
        <TodoList 
        items={this.state.items}
        clearList = {this.clearList}
        handleEdit={this.handleEdit}
        handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
