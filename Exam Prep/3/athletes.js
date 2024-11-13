function solve(athletes) {
    function getAthletesBySport(sport) {
        const filteredAthletes = athletes.filter(athlete => athlete.sport === sport)
        return filteredAthletes
    }

    function addAthlete(id, name, sport, medals, country) {
        const newAthlete = { id, name, sport, medals, country }
        athletes.push(newAthlete)
        return athletes
    }

    function getAthleteById(id) {
        const foundAthlete = athletes.find(athlete => athlete.id === id)

        return foundAthlete ?? `Athlete with ID ${id} not found`

    }

    function removeAthleteById(id) {
        const initialLength = athletes.length
        athletes = athletes.filter(athlete => athlete.id !== id)
        if (initialLength == athletes.length) {
            return `Athlete with ID ${id} not found`
        }
        else {
            return athletes
        }
    }

    function updateAthleteMedals(id, newMedals) {
        const foundAthletes = athletes.find(athlete => athlete.id === id)
        if (foundAthletes) {
            foundAthletes.medals = newMedals
            return athletes
        }
        else {
            return `Athlete with ID ${id} not found`
        }
    }

    function updateAthleteCountry(id, newCountry) {
        const foundAthlete = athletes.find(athlete => athlete.id === id)
        if (foundAthlete) {
            foundAthlete.country = newCountry
            return athletes
        }
        else {
            return `Athlete with ID ${id} not found`
        }
    }

    return {
        getAthletesBySport,
        addAthlete,
        getAthleteById,
        removeAthleteById,
        updateAthleteMedals,
        updateAthleteCountry
    };
}
let athletes = [
    { id: 1, name: "Usain Bolt", sport: "Sprinting", medals: 8, country: "Jamaica" },
    { id: 2, name: "Michael Phelps", sport: "Swimming", medals: 23, country: "USA" },
    { id: 3, name: "Simone Biles", sport: "Gymnastics", medals: 7, country: "USA" }
];

console.log(solve(athletes).getAthletesBySport("Sprinting"))