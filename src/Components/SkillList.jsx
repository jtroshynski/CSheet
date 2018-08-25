import React, { Component } from "react";
import "sass/main.css";
import axios from "axios";
import { Link } from "react-router-dom";

class SkillList extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      skills: [],
      skillCount: 0
    };
  }

  skillsArray = [
    { id: 0, bonus: 1 },
    { id: 1, bonus: 2 },
    { id: 2, bonus: 3 },
    { id: 3, bonus: 4 },
    { id: 4, bonus: 3 },
    { id: 5, bonus: 2 },
    { id: 6, bonus: 1 },
    { id: 7, bonus: 1 },
    { id: 8, bonus: 2 },
    { id: 9, bonus: 3 },
    { id: 10, bonus: 4 },
    { id: 11, bonus: 3 },
    { id: 12, bonus: 2 },
    { id: 13, bonus: 1 },
    { id: 14, bonus: 1 },
    { id: 15, bonus: 2 },
    { id: 16, bonus: 3 },
    { id: 17, bonus: 4 }
  ];

  // Calls D&D api to get race data when page loads
  async componentDidMount() {
    await axios.get("http://www.dnd5eapi.co/api/skills/").then(res => {
      const skillData = res.data.results;
      const skillCount = res.data.count;
      this.setState({ skills: skillData, skillCount: skillCount });
    });
  }

  render(props) {
    if (this.state.skillCount === 0) {
      return (
        <div>
          <span>Loading...</span>
        </div>
      );
    } else {
      const skillTiles = this.skillsArray.map(skill => (
        <div className="skillTile">
          <div className="roundedTile">
            <div className="skillText">
              <h2 className="sheetTextSmall">
                {this.state.skills[skill.id].name}
              </h2>
              <h2 className="sheetTextSmall">{skill.bonus}</h2>
            </div>
          </div>
        </div>
      ));
      return <div className="skills">{skillTiles}</div>;
    }
  }
}

export default SkillList;
