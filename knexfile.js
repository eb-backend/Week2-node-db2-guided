module.exports = {
    client: "sqlite3", //specifying the dbms
    useNullAsDefault: true, //specifically for sqlite
    connection:{
        //where our db file is
        filename:"./data/produce.db3"
    }
}