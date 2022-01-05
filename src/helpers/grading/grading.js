export const grading = (value) => {
    if (value >= 1 && value <= 30) {
        return "E"
    } else if (value >= 31 && value <= 60) {
        return "D"
    } else if (value >= 61 && value <= 80) {
        return "C"
    } else if (value >= 81 && value <= 90) {
        return "B"
    } else if (value >= 91) {
        return "A"
    }

    return "F"
}