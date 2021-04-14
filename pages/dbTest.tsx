import Link from "next/link";
import dbConnect from "../mongo-data/dbConnect";
import Customer from "../mongo-data/models/listing";

const Index = ({ listings }) => (
  <div>
    <h2>Customers</h2>
    {listings.map((listing) => (
      <div key={listing._id}>{listing.name}</div>
    ))}
  </div>
);

/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const result = await Customer.find({});

  const listings = result.map((doc) => {
    const obj = doc.toObject();
    obj._id = obj._id.toString();
    obj.birthdate = obj.birthdate.toString();
    return obj;
  });

  return { props: { listings: listings } };
}

export default Index;
