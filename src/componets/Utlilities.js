const toggleModal = () => {
    const modal = document.querySelector(".modal-overlay");
  
    if (modal) {
      modal.style.display =
        modal.style.display === "flex" ? "none" : "flex";
    }
  };

  export default toggleModal ;