// GET /(index) - home.index (render the homepage of the site)
// GET /images/image_id - image.index (render the page for a specific
// image)
// POST /images - image.create (when a user submits and uploads a new
// image)
// POST /images/image_id/like - image.like (when a user clicks the Like
// button)
// POST /images/image_id/comment - image.comment (when a user posts a
// comment)


module.exports = {
    index: function(req, res) {
        res.send(`The image:index controller ${req.params.image_id}`); 
    },
    create: function(req, res) {
        res.send(`The image:create POST controller`); 
    },
    mlike: function(req, res) {
        res.send('The image:like POST controller'); 
    }, 
    comment: function(req, res) {
        res.send('The image:comment POST controller'); 
    }
}; 