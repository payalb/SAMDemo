exports.handler= async(event)=> {
    let {num1, num2} = JSON.parse(event.body);
    let result = num1+ num2;
    return {
        statusCode: 200,
        body: JSON.stringify({"result" : result})
    }
}