// src/App.jsx
import { useState } from 'react';

const App = () => {

  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setStrength] = useState(0);
  const [totalAgility, setAgility] = useState(0);
  const [zombieFighters, setZombieFighters] = useState(
    [
      {
        id: 1,
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://via.placeholder.com/150/92c952',
      },
      {
        id: 2,
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://via.placeholder.com/150/771796',
      },
      {
        id: 3,
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://via.placeholder.com/150/24f355',
      },
      {
        id: 4,
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/d32776',
      },
      {
        id: 5,
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://via.placeholder.com/150/1ee8a4',
      },
      {
        id: 6,
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://via.placeholder.com/150/66b7d2',
      },
      {
        id: 7,
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://via.placeholder.com/150/56acb2',
      },
      {
        id: 8,
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://via.placeholder.com/150/8985dc',
      },
      {
        id: 9,
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://via.placeholder.com/150/392537',
      },
      {
        id: 10,
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/602b9e',
      },
    ]
  );

  const handleAddFighter = (newTeamMember) => {
    if (money >= newTeamMember.price) {
      setTeam([...team, newTeamMember]);
      setMoney(money - newTeamMember.price);
      setStrength(totalStrength + newTeamMember.strength);
      setAgility(totalAgility + newTeamMember.agility);
    } else {
      console.log("You don't have enough money!");
    }
  };

  const handleRemoveMember = (removedMember) => {
    setMoney(money + removedMember.price);
    setStrength(totalStrength - removedMember.strength);
    setAgility(totalAgility - removedMember.agility);
    setTeam(team.filter((member) => member.id !== removedMember.id));
  }

  console.log(team.length);

  return (
    <>
      <h1>Hello world!</h1>
      <h3>MY TEAM</h3>
      <p>Team Strength: {totalStrength}</p>
      <p>Team Agility: {totalAgility}</p>
      <p>Money: {money}</p>
      <div>
        {team.length === 0 ? ("Pick some team members!") : ( 
        <ul>
        {team.map((member) => (
          <li key={member.id}>
              Name: {member.name} <br />
              Price: {member.price} <br />
              Strength: {member.strength} <br />
              Agility: {member.agility} <br />
              <img src={member.img} alt={member.name} /> <br />
              <button onClick={() => handleRemoveMember(member)}>Remove from Team</button>
          </li>
        ))}
        </ul>
        )}
      </div>
      <h3>ZOMBIE FIGHTERS: </h3>
      <div>
        <ul>
          {zombieFighters.map((fighter) => 
            <li key={fighter.id}>
              Name: {fighter.name} <br />
              Price: {fighter.price} <br />
              Strength: {fighter.strength} <br />
              Agility: {fighter.agility} <br />
              <img src={fighter.img} alt={fighter.name} /> <br />
              <button onClick={() => handleAddFighter(fighter)}>Add to Team</button>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}

export default App
