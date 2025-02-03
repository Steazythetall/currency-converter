document.addEventListener("DOMContentLoaded", function () {
    const newsContainer = document.getElementById("news-container");

    async function fetchNews() {
        const apiKey = "a912393178ff58568ee5a48384b1eaf1"; 
        const url = `https://gnews.io/api/v4/search?q=currency&lang=pt&apikey=${apiKey}`;

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
            articleImage.src = article.image || "https://via.placeholder.com/150"; 
            articleImage.alt = article.title;

            const articleText = document.createElement("div");
            articleText.classList.add("article-text");

            const articleTitle = document.createElement("h3");
            articleTitle.textContent = article.title;

            const articleDescription = document.createElement("p");
            articleDescription.textContent = article.description || "no description.";

            const articleLink = document.createElement("a");
            articleLink.href = article.url;
            articleLink.textContent = "read more";
            articleLink.target = "_blank";

            articleText.appendChild(articleTitle);
            articleText.appendChild(articleDescription);
            articleText.appendChild(articleLink);
            newsArticle.appendChild(articleImage);
            newsArticle.appendChild(articleText);
            newsContainer.appendChild(newsArticle);
        });
    }

    fetchNews();
});


