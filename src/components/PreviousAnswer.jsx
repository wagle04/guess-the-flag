export default function PreviousAnswer({ prevCountries }) {

  return (
    <div className="container w-[50%] self-center">
      <ul>
        {prevCountries.map((country, index) => (
          <SinglePreviousAnswer
            key={country.country}
            country={country.country}
            percentage={country.percentMatch}
          />
        ))}
      </ul>
    </div>
  );
}

function SinglePreviousAnswer({ country, percentage }) {
  return (
    <div className="w-[100%] mb-2 self-center">
      <li key={country}>
        <div className="text-2xl flex justify-between" style={{color:'teal'}}>
          <div className="col-auto">{country}</div>
          <div className="col-auto">{percentage}%</div>
        </div>
      </li>
    </div>
  );
}
