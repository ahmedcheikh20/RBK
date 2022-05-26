module.exports = function (posts) {
  const postsObject = {};
  posts.forEach((element) => {
    const post = {
      id: element.id,
      poster: element.poster,
      title: element.title,
      content: element.content,
      createdAt: element.createdAt,
    };
    const comment = element["comment.id"]
      ? {
          id: element["comment.id"],
          text: element["comment.text"],
          commenter: element["comment.commenter"],
          createdAt: element["comment.createdAt"],
        }
      : null;
    if (postsObject[element.id] && comment) postsObject[element.id].comments.push(comment);
    else postsObject[element.id] = { ...post, comments: comment ? [comment]: [] };
  });
  return Object.values(postsObject).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
};
