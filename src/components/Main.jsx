import MainAnswer from "./MainAnswer.jsx";
import InputTextBox from "./InputTextBox.jsx";
import countries from "../data/data.js";
import { useEffect, useRef, useState } from "react";
import PreviousAnswer from "./PreviousAnswer.jsx";
import HintText from "./HintText.jsx";
import WinModal from "./WinModal.jsx";

export default function Main() {
  const countryListWithFlagDetails = Object.values(countries);
  const countryList = countryListWithFlagDetails.map((country) => country.name);

  let winnerCountryRef = useRef(countryList[0]);

  const [prevCountries, setPrevCountries] = useState([]);

  const [userWin, setUserWin] = useState(false);

  useEffect(() => {
    const rnd = Math.ceil(Math.random() * countryList.length);
    winnerCountryRef.current = countryList[rnd];
    console.log("New winner country-- ", winnerCountryRef.current);
  }, []);

  function resetGame() {
    setUserWin(false);
    setPrevCountries([]);
    const rnd = Math.ceil(Math.random() * countryList.length);
    winnerCountryRef.current = countryList[rnd];
    console.log("New winner country-- ", winnerCountryRef.current);
  }

  function onCountrySelect(country) {
    let containsCountry = false;

    for (let c in prevCountries) {
      if (prevCountries[c]["country"] === country) {
        containsCountry = true;
      }
    }

    if (winnerCountryRef.current === country) {
      setUserWin(true);
    }

    if (!containsCountry) {
      setPrevCountries((prevState) => [
        {
          country: country,
          percentMatch: getCountryFlagMatchPercent(
            winnerCountryRef.current,
            country,
          ),
        },
        ...prevState,
      ]);
    }
  }

  function getCountryFlagMatchPercent(winnerCountry, selectedCountry) {
    const winnerCountryData = Object.values(countries).find(
      (c) => c.name === winnerCountry,
    );
    const selectedCountryData = Object.values(countries).find(
      (c) => c.name === selectedCountry,
    );
    const selectedCountryColor = selectedCountryData.colors;

    const winnerColorSet = new Set(winnerCountryData.colors);

    const matchedColor = selectedCountryColor.filter((color) =>
      winnerColorSet.has(color),
    ).length;

    return (matchedColor / winnerColorSet.size).toFixed(2) * 100;
  }

  return (
    <>
      <div className="bg-gray-300 min-h-[200px] h-auto mt-5 w-[50%] rounded-md p-2 flex flex-col items-center">
        <MainAnswer />
        <InputTextBox
          countries={countryList}
          onCountrySelect={onCountrySelect}
        />
        {prevCountries.length > 0 && (
          <HintText percent={prevCountries[0].percentMatch} />
        )}
        <PreviousAnswer prevCountries={prevCountries} />
      </div>
      <WinModal
        isOpen={userWin}
        onClose={() => resetGame()}
        winnerCountry={winnerCountryRef.current}
        guesses={prevCountries.length}
      />
    </>
  );
}
