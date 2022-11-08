
module.exports = {
    plugins: [
        new webpack.DefinePlugin({
          'process.env.KEY': JSON.stringify(process.env.KEY),
         
        })
    ],
    }