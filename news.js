document.addEventListener("DOMContentLoaded", function () {
    const newsContainer = document.getElementById("news-container");

    
    async function fetchNews() {
        const apiKey = "8e1ea13995514e24a5617a030ce03eae"; 
        const url = `https://newsapi.org/v2/everything?q=currency&sortBy=publishedAt&apiKey=${apiKey}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.articles && data.articles.length > 0) {
                displayNews(data.articles);
            } else {
                newsContainer.innerHTML = "<p>No news articles found.</p>";
            }
        } catch (error) {
            console.error("Error fetching news:", error);
            newsContainer.innerHTML = "<p>Error fetching news articles.</p>";
        }
    }

    
    function displayNews(articles) {
        newsContainer.innerHTML = ""; 

        articles.forEach(article => {
            const newsArticle = document.createElement("div");
            newsArticle.classList.add("news-article");

            const articleImage = document.createElement("img");
            articleImage.src = article.urlToImage || "placeholder.png"; 
            articleImage.alt = article.title;

            const articleText = document.createElement("div");
            articleText.classList.add("article-text");

            const articleTitle = document.createElement("h3");
            articleTitle.textContent = article.title;

            const articleDescription = document.createElement("p");
            articleDescription.textContent = article.description;

            articleText.appendChild(articleTitle);
            articleText.appendChild(articleDescription);
            newsArticle.appendChild(articleImage);
            newsArticle.appendChild(articleText);
            newsContainer.appendChild(newsArticle);
        });
    }

    
    fetchNews();
});
