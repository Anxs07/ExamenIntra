import React from 'react'
import { useState, useEffect } from 'react'

const Home = () => {
    const [userGuess, setUserGuess] = useState({ name: "", guess: "", answer: "" })
    const [userGuessList, setUserGuessList] = useState([])

    useEffect(() => {
        const getUserGuess = async () => {
            const userGuessFromServer = await fetchUserGuess()
            setUserGuessList(userGuessFromServer)
        }
        getUserGuess()
        
    }, [userGuessList])

    const fetchUserGuess = async () => {
        const res = await fetch('http://localhost:9191/userGuess/get-all-userGuess')
        return await res.json()
    }

    const onSubmit = (e) => {
        e.preventDefault()
       let dice = Math.floor(Math.random() * 6) + 1
       console.log("dice " + dice)
       userGuess.answer = dice.toString()
       console.log(userGuess)

       postUserGuess(userGuess)
        .then(() => setUserGuess(userGuess))
        .catch((err) => console.log(err))
       
    }

    const postUserGuess = async (userGuess) => {
        const result = await fetch('http://localhost:9191/userGuess/save-userGuess',
          {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(userGuess)
          })
        return await result.json()
      }

      const showMessage = (answer) => {
          if(answer !== ''){
              return 'Manqué'
          } else{
              return ' '
          }
      }

    return (
        <div className="container">
            <h1 className="text-center">Examen Intra</h1>
            <form className="container p-4" onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="nameUserGuess" className="text-secondary"><i className="fas fa-user"></i> Votre Nom: </label>
                    <input type="text" className="form-control text-center" id="nameUserGuess" name="nom" placeholder="Entrez votre nom" onChange={(e) => setUserGuess({ ...userGuess, name: e.target.value })} required />
                </div>
                <div className="form-group">
                    <label htmlFor="prenomUser" className="text-secondary"><i className="fas fa-dice"></i> Votre Guess: </label>
                    <input type="text" className="form-control text-center" id="prenomUser" name="prenom" placeholder="Entrez votre guess" onChange={(e) => setUserGuess({ ...userGuess, guess: e.target.value })} required />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-block btn-secondary ">coup de dé</button>
                </div>
            </form>
            <div className="container p-4 text-center">
                <h2>{userGuess.answer}</h2>
                <h2>{userGuess.guess === userGuess.answer && userGuess.answer !=="" ? 'Bravo' : showMessage(userGuess.answer) }</h2>
            </div>
            <div className="container p-4 ">
                <table className="table table-hover bg-light">
                    <thead>
                        <tr>
                            <th scope="col">Nom</th>
                            <th scope="col">Guess d'utlisateur</th>
                            <th scope="col">Numero Random</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userGuessList.map((userGuess) => (
                            <tr key={userGuess.id}>
                                <th>{userGuess.name}</th>
                                <td>{userGuess.guess}</td>
                                <td>{userGuess.answer}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home
