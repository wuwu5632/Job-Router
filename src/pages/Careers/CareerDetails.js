import { useLoaderData, useParams } from "react-router-dom";

export default function CareerDetails() {
  const { id } = useParams();
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting Salery:{career.salary}</p>
      <p>Location:{career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          modi iusto eveniet excepturi? Veritatis fugit id doloribus perferendis
          quaerat non, quae modi accusamus quod. Iusto temporibus voluptatem
          incidunt et vero mollitia quam magni, atque dolor delectus consequatur
          tempore dignissimos, harum nam, consectetur necessitatibus vitae
          placeat saepe. Fuga suscipit totam nulla quia dolore mollitia
          voluptate facilis!
        </p>
      </div>
    </div>
  );
}

export const careerDetailsLoader = async ({params}) => {
  const { id } = params;
  const res = await fetch('http://localhost:8012/careers/' + id);
  if (!res.ok){
    throw Error("Could not find that career")
  }
  return res.json();
};
