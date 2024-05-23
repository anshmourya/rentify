import Buyer from "./Buyer";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("uid"));

  if (user.role == "buyer") {
    return <Buyer />;
  } else if (user.role == "seller") {
    return <div>Seller</div>;
  }
};

export default Home;
