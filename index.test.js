const { convertTimeToWords } = require("./index")

describe("Time to words", () => {
  it("Handles midnight", () => {
    const timeInWords = convertTimeToWords("0:00")
    expect(timeInWords).toBe("midnight")
  })

  it("Handles 30 - 8:30", () => {
    const timeInWords = convertTimeToWords("8:30")
    expect(timeInWords).toBe("half past eight")
  })

  it("Handles times after 30 mins - 2:45", () => {
    const timeInWords = convertTimeToWords("2:45")
    expect(timeInWords).toBe("quarter to three")
  })

  it("Handles 40 - 2:40", () => {
    const timeInWords = convertTimeToWords("2:40")
    expect(timeInWords).toBe("twenty to three")
  })

  it("Handles 15 - 2:15", () => {
    const timeInWords = convertTimeToWords("2:15")
    expect(timeInWords).toBe("quarter past two")
  })

  it("Handles times after 30 mins - 2:55", () => {
    const timeInWords = convertTimeToWords("2:55")
    expect(timeInWords).toBe("five to three")
  })
})
