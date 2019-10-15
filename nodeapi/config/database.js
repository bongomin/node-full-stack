
if (process.env.NODE_ENV === 'production') {
   module.exports = {
      mongoURI: 'mongodb+srv://bongomin:P@55w0rd55@apinode-nvtwn.mongodb.net/test?retryWrites=true&w=majority',
      JWT_SECRET: 'redfvdhdhjfjdyetdbdyyrjdmdgdtrdgh'
   }

} else {
   module.exports = {
      mongoURI: 'mongodb://localhost/apinode',
      JWT_SECRET: 'redfvdhdhjfjdyetdbdyyrjdmdgdtrdgh'
   }
}