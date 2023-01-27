const database = {
    fish: [
        {
            id: 1,
            fishType: "Scooter Blenny",
            Image: "https://content1.tankstop.com/images/items/fish/scooter-blenny-synchiropus-ocellatus-1.jpg",
            species: "Synchiropus ocellatus",
            length: "3 inches",
            fishName: "Razor",
            harvestedFrom: "Fiji",
            diet: "Carnivore",
        },
        {
            id: 2,
            fishType: "Orange Spot Filefish",
            Image: "https://content1.tankstop.com/images/items/fish/orange-spot-filefish-oxymonacanthus-longirostris-1.jpg",
            species: "Oxymonacanthus longirostris",
            length: "5 inches",
            fishName: "Big Orange",
            harvestedFrom: "Indo-Pacific Ocean",
            diet: "Carnivore",
        },
        {
            id: 3,
            fishType: "Bicolor Parrotfish",
            Image: "https://content1.tankstop.com/images/items/fish/bicolor-parrotfish-cetoscarus-bicolor-1.jpg",
            species: "Cetoscarus bicolor",
            length: "35 inches",
            fishName: "Polly",
            harvestedFrom: "Great Barrier Reef",
            diet: "Omnivore",
        },
        {
            id: 4,
            fishType: "Waspfish",
            Image: "https://content1.tankstop.com/images/items/fish/waspfish-paracentropogon-spp-1.jpg",
            species: "Paracentropogon spp",
            length: "5 inches",
            fishName: "Karen",
            harvestedFrom: "Japan",
            diet: "Carnivore",
        },
        {
            id: 5,
            fishType: "Big Eye Black Bar Soldierfish",
            Image: "https://content1.tankstop.com/images/items/fish/big-eye-black-bar-soldierfish-myripristis-sp-1.jpg",
            species: "Myripristis sp",
            length: "10 inches",
            fishName: "Buscemi",
            harvestedFrom: "Caribbean",
            diet: "Carnivore",
        },
        {
            id: 6,
            fishType: "Tiger Tail Seahorse",
            Image: "https://content1.tankstop.com/images/items/fish/tiger-tail-seahorse-hippocampus-comes-1.jpg",
            species: "Hippocampus comes",
            length: "7 inches",
            fishName: "Elvis",
            harvestedFrom: "Thailand",
            diet: "Carnivore",
        },
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}
