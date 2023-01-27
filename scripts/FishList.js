// Import the function that returns a copy of the fish array
import { getFish } from "./database.js"

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="FishList">'

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        htmlString += `<section class="fish card">
            <div><img  class="fish__image image--card" src="${fish.Image}" /></div>
            <div class="fish__name">${fish.fishType}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.length}</div>
            <div class="fish__length">${fish.fishName}</div>
            <div class="fish__location">${fish.harvestedFrom}</div>
            <div class="fish__diet">${fish.diet}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}