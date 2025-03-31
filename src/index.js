const state = {
  crabCount: 0
};

const addCrab = (event) => {
  const newCrab = document.createElement('span');
  const crabContainer = document.querySelector('#crabContainer');
  newCrab.textContent = '🦀';
  crabContainer.appendChild(newCrab);

  // Crab Count Behavior
  state.crabCount += 1;
  const crabCountContainer = document.querySelector('#crabCount');
  crabCountContainer.textContent = `Crab Count: ${state.crabCount}`;
};

const registerEventHandlers = (event) => {
  const crabButton = document.querySelector('#addCrabButton');
  crabButton.addEventListener('click', addCrab);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);