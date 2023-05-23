import { Component } from "react";
import TodoList from "./todoList/TodoList";

import BookList from "./bookList/BookList";
import AddUser from "./bookList/AddUser";
// import InfoUser from "./infoUser/InfoUser";
import styles from "../../util/style";
class Code extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          favourite: false,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
              lat: "-37.3159",
              lng: "81.1496",
            },
          },
          phone: "1-770-736-8031 x56442",
          website: "hildegard.org",
          company: {
            name: "Romaguera-Crona",
            catchPhrase:
              "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
          },
        },
        {
          id: 2,
          favourite: false,
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv",
          address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: {
              lat: "-43.9509",
              lng: "-34.4618",
            },
          },
          phone: "010-692-6593 x09125",
          website: "anastasia.net",
          company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply-chains",
          },
        },
        {
          id: 3,
          favourite: false,
          name: "Clementine Bauch",
          username: "Samantha",
          email: "Nathan@yesenia.net",
          address: {
            street: "Douglas Extension",
            suite: "Suite 847",
            city: "McKenziehaven",
            zipcode: "59590-4157",
            geo: {
              lat: "-68.6102",
              lng: "-47.0653",
            },
          },
          phone: "1-463-123-4447",
          website: "ramiro.info",
          company: {
            name: "Romaguera-Jacobson",
            catchPhrase:
              "Face to face bifurcated interface",
            bs: "e-enable strategic applications",
          },
        },
        {
          id: 4,
          favourite: false,
          name: "Patricia Lebsack",
          username: "Karianne",
          email: "Julianne.OConner@kory.org",
          address: {
            street: "Hoeger Mall",
            suite: "Apt. 692",
            city: "South Elvis",
            zipcode: "53919-4257",
            geo: {
              lat: "29.4572",
              lng: "-164.2990",
            },
          },
          phone: "493-170-9623 x156",
          website: "kale.biz",
          company: {
            name: "Robel-Corkery",
            catchPhrase:
              "Multi-tiered zero tolerance productivity",
            bs: "transition cutting-edge web services",
          },
        },
        {
          id: 5,
          favourite: false,
          name: "Chelsey Dietrich",
          username: "Kamren",
          email: "Lucio_Hettinger@annie.ca",
          address: {
            street: "Skiles Walks",
            suite: "Suite 351",
            city: "Roscoeview",
            zipcode: "33263",
            geo: {
              lat: "-31.8129",
              lng: "62.5342",
            },
          },
          phone: "(254)954-1289",
          website: "demarco.info",
          company: {
            name: "Keebler LLC",
            catchPhrase:
              "User-centric fault-tolerant solution",
            bs: "revolutionize end-to-end systems",
          },
        },
        {
          id: 6,
          favourite: false,
          name: "Mrs. Dennis Schulist",
          username: "Leopoldo_Corkery",
          email: "Karley_Dach@jasper.info",
          address: {
            street: "Norberto Crossing",
            suite: "Apt. 950",
            city: "South Christy",
            zipcode: "23505-1337",
            geo: {
              lat: "-71.4197",
              lng: "71.7478",
            },
          },
          phone: "1-477-935-8478 x6430",
          website: "ola.org",
          company: {
            name: "Considine-Lockman",
            catchPhrase:
              "Synchronised bottom-line interface",
            bs: "e-enable innovative applications",
          },
        },
        {
          id: 7,
          favourite: false,
          name: "Kurtis Weissnat",
          username: "Elwyn.Skiles",
          email: "Telly.Hoeger@billy.biz",
          address: {
            street: "Rex Trail",
            suite: "Suite 280",
            city: "Howemouth",
            zipcode: "58804-1099",
            geo: {
              lat: "24.8918",
              lng: "21.8984",
            },
          },
          phone: "210.067.6132",
          website: "elvis.io",
          company: {
            name: "Johns Group",
            catchPhrase:
              "Configurable multimedia task-force",
            bs: "generate enterprise e-tailers",
          },
        },
        {
          id: 8,
          favourite: false,
          name: "Nicholas Runolfsdottir V",
          username: "Maxime_Nienow",
          email: "Sherwood@rosamond.me",
          address: {
            street: "Ellsworth Summit",
            suite: "Suite 729",
            city: "Aliyaview",
            zipcode: "45169",
            geo: {
              lat: "-14.3990",
              lng: "-120.7677",
            },
          },
          phone: "586.493.6943 x140",
          website: "jacynthe.com",
          company: {
            name: "Abernathy Group",
            catchPhrase: "Implemented secondary concept",
            bs: "e-enable extensible e-tailers",
          },
        },
        {
          id: 9,
          favourite: false,
          name: "Glenna Reichert",
          username: "Delphine",
          email: "Chaim_McDermott@dana.io",
          address: {
            street: "Dayna Park",
            suite: "Suite 449",
            city: "Bartholomebury",
            zipcode: "76495-3109",
            geo: {
              lat: "24.6463",
              lng: "-168.8889",
            },
          },
          phone: "(775)976-6794 x41206",
          website: "conrad.com",
          company: {
            name: "Yost and Sons",
            catchPhrase:
              "Switchable contextually-based project",
            bs: "aggregate real-time technologies",
          },
        },
        {
          id: 10,
          favourite: false,
          name: "Clementina DuBuque",
          username: "Moriah.Stanton",
          email: "Rey.Padberg@karina.biz",
          address: {
            street: "Kattie Turnpike",
            suite: "Suite 198",
            city: "Lebsackbury",
            zipcode: "31428-2261",
            geo: {
              lat: "-38.2386",
              lng: "57.2232",
            },
          },
          phone: "024-648-3804",
          website: "ambrose.net",
          company: {
            name: "Hoeger LLC",
            catchPhrase:
              "Centralized empowering task-force",
            bs: "target end-to-end models",
          },
        },
      ],
    };
  }

  onDelete = (id) => {
    console.log("baiwel", id);
    this.setState(({ data }) => ({
      data: data.filter((c) => c.id !== id),
    }));
  };
  adForm = (item) => {
    this.setState(({ data }) => {
      const newArr = [
        ...data,
        { ...item, favourite: false },
      ];
      return {
        data: newArr,
      };
    });
  };

  onToggleLike = (id) => {
    console.log("baiel", id);
    this.setState(({ data }) => {
      const newarr = data.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            favourite: !item.favourite,
          };
        }
        return item;
      });
      return {
        data: newarr,
      };
    });
  };
  render() {
    const userCount = this.state.data.length;
    const stars = this.state.data.filter(
      (c) => c.favourite
    ).length;
    const { theme, style } = this.props;
    return (
      <div className={`  ${theme ? "dark" : "light"}  ${style ? 'h-scr ' : ''} `}>
        <div className={`${styles.container} pt-8`}>
          <h2 id='/code'
            className={`${styles.textC}  text-center text-[36px] relative  p-9 mb-9`}
          >

            code example
            <div
              className={`w-[50px] h-[4px] ${theme ? "   bg-white b" : " bg-black"
                } absolute left-[50%]  `}
            ></div>
            <div
              className={`w-[10px] h-[10px] ${theme ? "   bg-white b" : " bg-black"
                } absolute left-[50%]  translate-x-[-50%] rounded-lg`}
            ></div>
            <div
              className={`w-[50px] h-[4px] ${theme ? "   bg-white b" : " bg-black"
                } absolute right-[50%] `}
            ></div>
          </h2>

          <AddUser
            adForm={this.adForm}
            theme={theme}
            userCount={userCount}
            stars={stars}
          />
          <BookList
            onDelete={this.onDelete}
            users={this.state.data}
            onToggleLike={this.onToggleLike}
          />
        </div>
        <TodoList />
      </div>
    );
  }
}

export default Code;
