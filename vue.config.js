module.exports ={
    devServer:{
        open:true
    },
    css:{
        loaderOptions:{
            postcss:{
                plugin:[
                    // autoprefixer(),
                ]
            },
            less:{
                javascriptEnabled:true
            }

        }
        

    }
   
}