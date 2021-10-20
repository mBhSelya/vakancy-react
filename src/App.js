import { useState } from 'react';
function App() {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');

  function handleName() {
      let name = document.querySelector('.popup__input_profile_name').value;
      setName(name);
  }

  function handleUserName() {
      let userName = document.querySelector('.popup__input_profile_description').value
      setUserName(userName);
  }

  const saveButton = document.querySelector('.form__button-save');
  saveButton.addEventListener('click', (e) => {
    e.preventDefault();
    handleName();
    handleUserName();
  })

  return (
    <div className="App">
      <p className="App__user">{name}</p>
      <p className="App__user">{userName}</p>
    </div>
  );
}

export default App;
