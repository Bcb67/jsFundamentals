//Objects

//Objects store multiple objects that are similar in structure. This is great for out JS logic.
//Objects can hold multiple datatypes
//Denoted with { }
// Key - Value Pairs

//example
let netflix = {
    id: 1,
    name: "Super Store",
    seasons: {
        season1: {
          seasonInfo: {
              episodeInfo: [
                { episode: 1, episodeName: "Pilot"},
                { episode: 2, episodeName: "Magazine Profile"},
                { episode: 3, episodeName: "Shots and Salsa"},
                { episode: 4, episodeName: "Mannequin"}
              ]
          }
        },
        season2: {
            seasonInfo: {
                episodeInfo: [
                    {episode: 5, episodeName: "Shoplifter"},
                    {episode: 6, episodeName: "Secret Shopper"},
                    {episode: 7, episodeName: "Color Wars"},
                    {episode: 8, episodeName: "Wedding Day Sale"},
                    {episode: 9, episodeName: "All-Nighter"}
                ]
            }
        },
        season3: {
            seasonInfo: {
                episodeInfo: [
                    {episode: 10, episodeName: ""},
                    {episode: 11, episodeName: ""},
                    {episode: 12, episodeName: ""},
                    {episode: 13, episodeName: ""},
                    {episode: 14, episodeName: ""}
                ]
            }
        }
    }
}

//dot notation

//console.log("All data ", netflix)
//console.log('Just season info: ', netflix.seasons.season1.seasonInfo)
//console.log('Episode Name: ', netflix.seasons.season1.seasonInfo.episodeInfo[0].episodeName)

/*
pick an episode to show
using dot notation, walk through the netflix object and print off both the episode and the episode name
*/
console.log('Episode Name: ', netflix.seasons.season2.seasonInfo.episodeInfo[2].episodeName, 'episode', netflix.seasons.season2.seasonInfo.episodeInfo[2].episode)