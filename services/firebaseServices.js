//returns promise
module.exports = {
    create : (conn, refObj, dataObj) => conn.database.ref(refObj).set(dataObj),
    push : (conn, refObj, dataObj) => conn.database.ref(refObj).push(dataObj)
}

