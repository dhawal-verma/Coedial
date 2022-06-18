module.exports.home = function(resquest , response)
{
    return response.render('home',{
        title  : "Home"
    });
}