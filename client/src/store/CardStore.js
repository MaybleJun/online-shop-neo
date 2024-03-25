// import { makeObservable, observable, action } from "mobx";

// class CardStore {
//   cards = [];
//   shopCards = [];
//   loading = false;
//   error = "";

//   constructor() {
//     makeObservable(this, {
//       cards: observable,
//       shopCards: observable,
//       loading: observable,
//       error: observable,
//       fetchCard: action,
//       addShopList: action,
//       removeShopItem: action,
//       increment: action,
//       decrement: action,
//       getTotal: action,
//     });
//   }

//   async fetchCard() {
//     this.loading = true;
//     try {
//       const res = await fetch("./data.json", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//       });
//       if (!res.ok) {
//         throw new Error("Ошибка в открытии файла JSON");
//       }
//       const data = await res.json();
//       this.cards = data;
//     } catch (error) {
//       this.error = error.message;
//     } finally {
//       this.loading = false;
//     }
//   }

//   addShopList(item) {
//     const itemInCard = this.shopCards.find((i) => i.id === item.id);
//     if (itemInCard) {
//       itemInCard.count++;
//     } else {
//       this.shopCards.push({ ...item, count: 1 });
//     }
//   }

//   removeShopItem(item) {
//     this.shopCards = this.shopCards.filter((i) => i.id !== item.id);
//   }

//   increment(item) {
//     const foundItem = this.shopCards.find((i) => i.id === item.id);
//     if (foundItem) {
//       foundItem.count++;
//     }
//   }

//   decrement(item) {
//     const foundItem = this.shopCards.find((i) => i.id === item.id);
//     if (foundItem) {
//       if (foundItem.count === 1) {
//         foundItem.count = 1;
//       } else {
//         foundItem.count--;
//       }
//     }
//   }

//   getTotal() {
//     let totalPrice = 0;
//     this.shopCards.forEach((item) => {
//       totalPrice += item.price * item.count;
//     });
//     return totalPrice;
//   }
// }

// const cardStore = new CardStore();
// export default CardStore;