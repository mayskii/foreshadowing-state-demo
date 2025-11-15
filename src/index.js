// const state = {
//   crabCount: 0
// };

// const addCrab = (event) => {
//   const newCrab = document.createElement('span');
//   const crabContainer = document.querySelector('#crabContainer');
//   newCrab.textContent = '🦀';
//   crabContainer.appendChild(newCrab);

//   // Crab Count Behavior
//   state.crabCount += 1;
//   const crabCountContainer = document.querySelector('#crabCount');
//   crabCountContainer.textContent = `Crab Count: ${state.crabCount}`;
// };

// const registerEventHandlers = (event) => {
//   const crabButton = document.querySelector('#addCrabButton');
//   crabButton.addEventListener('click', addCrab);
// };

// document.addEventListener('DOMContentLoaded', registerEventHandlers);

const state = {
  crabCounter: 0
};

const addCrab = () => {
  const newCrab = document.createElement('span');
  newCrab.textContent = '🦀';
  const crabContainer = document.getElementById('crabContainer');
  crabContainer.appendChild(newCrab);

  state.crabCounter += 1;
  const crabCountContainer = document.querySelector('#crabCount');
  crabCountContainer.textContent = `Crab Count: ${state.crabCounter}`;
};

const crabButton = document.querySelector('#addCrabButton');
crabButton.addEventListener('click', addCrab);


const changeMode = () => {
  const body = document.body;
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
  } else {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
  }

};

const modeButton = document.querySelector('#changeModeButton');
modeButton.addEventListener('click', changeMode);

const deleteMode = () => {
  const body = document.body;
  body.classList.remove('light-mode');
  body.classList.remove('dark-mode');
};


const deleteModeButton = document.querySelector('#deleteModeButton');
deleteModeButton.addEventListener('click', deleteMode);