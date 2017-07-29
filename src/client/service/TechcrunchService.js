var API_KEY = 'e3c99363b2ee49a198a476be596e45a5'

export default class TechcrunchService {  
    static getLatestArticles() {
        return fetch('https://newsapi.org/v1/articles?source=techcrunch&sortBy=latest&apiKey=' + API_KEY).
        then(response => response.json())
        .catch(ex => {
            return ex
        })
    }
}
