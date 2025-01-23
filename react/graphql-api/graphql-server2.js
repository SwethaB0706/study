const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require('@apollo/server/standalone');

let schema = `
    type Movie {
        id: ID!,
        title: String,
        year: Int,
        genre: String,
        language: String,
        actors: [Actor],
        ratings: [Rating]
    }

    type Actor {
        id: ID!,
        name: String,
        age: Int 
    }

    type Rating {
        name: String,
        score: Float 
    }
    
    type Query {
        allMovies: [Movie],
        movie(title: String): Movie,
        movies(year: Int): [Movie]
    }
    type Mutation {
        removeMovie(title: String): ID
    }    
`;

let moviesDb = [
        {
          "id": "m101",
          "title": "The Last Horizon",
          "year": 2024,
          "genre": "Sci-Fi",
          "language": "English",
          "actors": [
            {
              "id": "a101",
              "name": "John Doe",
              "age": 50
            },
            {
              "id": "a102",
              "name": "Jane Smith",
              "age": 45
            }
          ],
          "ratings": [
            {
              "name": "IMDB",
              "score": 8.4
            },
            {
              "name": "Rotten Tomatoes",
              "score": 92
            }
          ]
        },
        {
          "id": "m102",
          "title": "Mystic Waters",
          "year": 2023,
          "genre": "Fantasy",
          "language": "French",
          "actors": [
            {
              "id": "a103",
              "name": "Marie Curie",
              "age": 40
            },
            {
              "id": "a104",
              "name": "Pierre Dupont",
              "age": 35
            }
          ],
          "ratings": [
            {
              "name": "IMDB",
              "score": 7.9
            },
            {
              "name": "Rotten Tomatoes",
              "score": 85
            }
          ]
        },
        {
          "id": "m103",
          "title": "Echoes of Eternity",
          "year": 2025,
          "genre": "Drama",
          "language": "Spanish",
          "actors": [
            {
              "id": "a105",
              "name": "Carlos Mendez",
              "age": 60
            },
            {
              "id": "a106",
              "name": "Sofia Lopez",
              "age": 38
            }
          ],
          "ratings": [
            {
              "name": "IMDB",
              "score": 8.7
            },
            {
              "name": "Rotten Tomatoes",
              "score": 89
            }
          ]
        },
        {
          "id": "m104",
          "title": "The Silent Storm",
          "year": 2024,
          "genre": "Thriller",
          "language": "German",
          "actors": [
            {
              "id": "a107",
              "name": "Hans Müller",
              "age": 55
            },
            {
              "id": "a108",
              "name": "Greta Schneider",
              "age": 47
            }
          ],
          "ratings": [
            {
              "name": "IMDB",
              "score": 7.5
            },
            {
              "name": "Rotten Tomatoes",
              "score": 78
            }
          ]
        }
];

let resolvers = {
    Mutation: {
        removeMovie(src, args) {
            let title = args.title;
            let movieToBeRemoved = moviesDb.find(item => item.title === title);
            if(movieToBeRemoved) {
                moviesDb = moviesDb.filter(item => item.title !== title);
                return movieToBeRemoved.id;
            } else {
                return null;
            }
        }
    },
    Query: {
       movies(src, args) {
            let year = args.year;
            return moviesDb.filter(item => item.year === year);
       }, 
       allMovies() {
            //Ideally you will connect to backend API and fetch all the movies; but let's hardcode it
            return moviesDb;
       },
       movie(src, args) {
        //Ideally you will connect to backend API
        let title = args.title;
        return moviesDb.find(item => item.title === title);
       }     
    }
};

let server = new ApolloServer({
    typeDefs: schema,
    resolvers
});

startStandaloneServer(server, {
    listen: 9000
})
.then(response => console.log("GraphQL server2 started at 9000"));



