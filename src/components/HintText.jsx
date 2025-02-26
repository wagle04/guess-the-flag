export default function HintText({ percent }) {
  let hintText;


  if (percent === 100) {
    hintText = "Yay! You got the colors right, but not the country!";
  } else if (percent >= 80) {
    hintText =
      "So close! You nailed most colors, but it's not the right country!";
  } else if (percent >= 60) {
    hintText = "You’re really close! Just a couple more matching colors to go!";
  } else if (percent >= 40) {
    hintText = "Not bad! Your choice shares some flag colors. Keep going!";
  } else if (percent >= 20) {
    hintText =
      "You’ve got a few colors right! Maybe try a similar colored country?";
  } else {
    hintText = "Oops! The colors don’t match much. Try a different country!";
  }

  return <div className="mt-2 mb-2"><p style={{color:'red'}}>{hintText}</p></div>;
}
