import Article from "./Article"

const ArticleList = ({ articles }) => {

    const articleList = articles.map(article => {
        // you want to assign the key to the rendered component, 
        // not in the actual component (in this case Article)
        return <Article 
                    key={article.id}
                    title={article.title} 
                    date={article.date} 
                    preview={article.preview}
                    minutes={article.minutes}
                    />
    })
    return <main>
        {/* array of Article components with unique keys */}
        {articleList}
    </main>
}

export default ArticleList