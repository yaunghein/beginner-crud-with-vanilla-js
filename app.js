const inputProduct = document.getElementsByClassName("input-product")[0];
const productContainer = document.getElementsByClassName("product-list-container")[0];
const btn = document.getElementById("btn");
//callback function to add products
const addProduct = () => {
  let item = inputProduct.value;
  if (item === "") {
    alert("Enter a product");
    return false;
  }
  const itemCard = document.createElement("div");
  itemCard.classList.add("item-card");
  const itemName = document.createElement("p");
  itemName.classList.add("item-name");
  itemName.textContent = item;

  const trashBtn = document.createElement("i");
  trashBtn.classList.add("far", "fa-trash-alt", "trash");
  //event to delect the item when the user click on trash icon
  trashBtn.addEventListener("click", (event) => {
    event.target.parentElement.remove();
  });

  const finishBtn = document.createElement("i");
  finishBtn.classList.add("fas", "fa-tasks", "finish");
  //event to delect the item when the user click on trash icon
  finishBtn.addEventListener("click", (event) => {
    let item = event.target.parentElement;
    let isChecked = item.classList.contains("opacity-reduce");
    isChecked ? item.classList.remove("opacity-reduce") : item.classList.add("opacity-reduce");
  });

  const editBtn = document.createElement("i");
  editBtn.classList.add("far", "fa-edit", "edit");
  //event to edit product name the item when the user click on edit icon
  editBtn.addEventListener("click", (event) => {
    let p = event.target.parentElement.children[0];
    p.contentEditable = true;
    p.focus();
    editBtn.style.display = "none";
    saveBtn.style.display = "flex";
  });

  const saveBtn = document.createElement("i");
  saveBtn.classList.add("fas", "fa-check", "save");
  //event to save product name the item when the user click on save icon
  saveBtn.addEventListener("click", (event) => {
    let p = event.target.parentElement.children[0];
    p.contentEditable = false;
    editBtn.style.display = "flex";
    saveBtn.style.display = "none";
  });

  itemCard.append(itemName);
  itemCard.append(editBtn);
  itemCard.append(saveBtn);
  itemCard.append(finishBtn);
  itemCard.append(trashBtn);
  productContainer.append(itemCard);
  inputProduct.value = "";
};

// inputProduct.addEventListener("change", addProduct);
btn.addEventListener("click", addProduct);
