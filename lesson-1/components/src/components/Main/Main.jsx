import Button from "../Button/Button";
import MovieList from "../MovieList/MovieList";
import items from "../../data/movieList.json";
import contacts from "../../data/phoneList.json";
import PhoneList from "../PhoneList/PhoneList.jsx";

const Main = () => {
  return (
    <main className="main">
      <h2>Page description</h2>
      <p>page description</p>
      <Button type="button" text="Order me" />
      <Button type="submit" text="Send" />
      <MovieList title="Best movies 2024" items={items} />
      <PhoneList title={"Phone Book 2024"} contacts={contacts} />
    </main>
  );
};

export default Main;
