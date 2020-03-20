const AuthorController = require('../controllers/author.controller');
module.exports = function(app){
    app.post('/api/add_author', AuthorController.createAuthor);
    app.get('/api/get_authors', AuthorController.getAllAuthors);
    app.get('/api/get_authors/:id', AuthorController.getAuthor);
    app.put('/api/get_authors/:id/edit', AuthorController.updateAuthor);
    app.delete('/api/get_authors/:id/delete', AuthorController.deleteAuthor);

}
