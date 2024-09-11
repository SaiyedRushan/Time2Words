// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  if (time === "0:00") {
    return "midnight"
  } else if (time === "12:00") {
    return "midday"
  }

  let numbersToWordsMap = {
    2: "two",
    8: "eight",
    30: "half",
    3: "three",
    5: "five",
    20: "twenty",
    15: "quarter",
  }

  let splitTime = time.split(":")
  let hours = parseInt(splitTime[0])
  let minutes = parseInt(splitTime[1])
  let timeInWords = ""

  if (minutes > 30) {
    timeInWords = numbersToWordsMap[60 - minutes] + " to " + numbersToWordsMap[hours + 1]
  } else {
    timeInWords = numbersToWordsMap[minutes] + " past " + numbersToWordsMap[hours]
  }

  return timeInWords
}

module.exports = { convertTimeToWords }
