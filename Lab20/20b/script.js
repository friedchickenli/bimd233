// var req = new Request(url);
fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=9341c98a680c4417a0d2ee7e94fed55a')
  .then(res => {
      return res.json();
  })
.then(data => {
  renderData(data.articles);
  // console.log(data);
  
});

function renderData(data){
  data.forEach(function(article){
    $('body').append(`
<div class ="article">
<ul class="article-body">
  <li class="author">${article.author}</li>
  <li class="title">${article.title}</li>
  <li class="description">${article.description}</li>
  <a href="${article.url}">Click me to redirect to article</a>
  <li class="urlImage"><img src="${article.urlToImage}"/></li>
  <li class="published">Published Date: ${article.publishedAt}</li>
  </ul>
  </div>
`);
  })
}