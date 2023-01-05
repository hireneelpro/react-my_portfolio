import "./utils.scss"

export const addShake = (e) => {
  e.target.classList.add("shake");
};
export const removeShake = (e) => {
  setTimeout(() => {
    e.target.classList.remove("shake");
  }, 1000);
};
