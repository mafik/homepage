
module.exports = (env, callback) ->
  env.helpers.getArticles = (contents) ->
    articles = contents._.directories.map((item) -> item.index).filter((item) -> !!item)
    articles.sort (a, b) -> b.date - a.date
    return articles

  callback()

