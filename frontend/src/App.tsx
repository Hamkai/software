import React,{useState,useEffect} from 'react';
import { Course } from './interfaces';
import './App.css';
import CourseItem from './Courseitem';
const App=() =>{
  const [courses,setCourses]=useState<any[]>();
  
  useEffect(() =>{
    fetch('http://localhost:3000/courses')
      .then(res=>res.json())
      .then(obj=>{
        setCourses(obj);
      });
},[]);
  return(
    <div className="App">
      <ul>
        {courses?.map((item)=>(
          <CourseItem key={item.id} course={item}/>
        ))} 
      </ul>
    </div>
  );
  }


/*
type AppState = {
  message:string;
};
class App extends React.Component<{}, AppState> {
  state: AppState = {
    message: 'Default message',
  };

  componentDidMount(){
    fetch('http://localhost:3000/courses')
      .then(res => res.json())
      .then(obj =>{
        this.setState({message: obj.message});
      });
  }
  render() {
    return (
      <div>
        {this.state.message}
      </div>
    );
  }
}

*/
export default App;