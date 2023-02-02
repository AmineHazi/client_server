module.exports = (sequelize, DataTypes) => {
    const books = sequelize.define("books", {
        title:{
            type : DataTypes.STRING,
            allowNull : false
        },
        author:{
            type : DataTypes.STRING,
            allowNull : false
        },
        description:{
            type : DataTypes.STRING,
            allowNull : false
        },
        pageCount:{
            type : DataTypes.INTEGER(11),
            allowNull : false
        },
        publishedDate:{
            type : DataTypes.STRING,
            allowNull : false
        },
        price:{
            type : DataTypes.INTEGER(11),
            allowNull : false
        },
        coverImage:{
            type : DataTypes.STRING,
            allowNull : false
        },
        quantity:{
            type : DataTypes.INTEGER(11),
            allowNull : false
        }
    })

    return books;
}