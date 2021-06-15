import React, { useEffect, useState } from "react";
import './App.css';
import { connect } from "react-redux";
import { fetchTeams } from "./store/actions";
import { Card } from "react-bootstrap";

function App(props) {
  const [url] = useState("https://www.balldontlie.io/api/v1/teams");
  const {fetchTeams} = props;

  useEffect( () => {
    fetchTeams(url);
  }, [fetchTeams,url]);

  return (
    <div className="App">
       <h1>Basketball Teams</h1>
       {props.teams.map( (team) => (
         <Card key={team.id} className="text-center">
         <Card.Header>{team.abbreviation}</Card.Header>
         <Card.Body>
           <Card.Title>{team.full_name}</Card.Title>
           <div className="row">
             <div className="col">
             <h6>City : </h6>
             </div>
             <div className="col">
             <p>{team.city}</p>
             </div>
             </div>

             <div className="row">
             <div className="col">
             <h6>Conference : </h6>
             </div>
             <div className="col">
             <p>{team.conference}</p>
             </div>
             </div>

             <div className="row">
             <div className="col">
             <h6>Division : </h6>
             </div>
             <div className="col">
             <p>{team.division}</p>
             </div>
             </div>
         </Card.Body>
         <Card.Footer className="text-muted">GO {team.name} !</Card.Footer>
       </Card>
       ) )}
       
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    teams : state.teams,
    error : state.error
  }
}

export default connect(mapStateToProps , {fetchTeams})(App);
