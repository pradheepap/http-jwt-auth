module.exports.getHandler = async (event) => {
    console.log(event);
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'GET:: Welcome to AWS ASEAN Summit Singapore, You are in for a treat!',
        },
        null,
        2
      ),
    };
  };
  
  module.exports.postHandler = async (event) => {
    console.log(event);
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'POST :: Welcome to AWS ASEAN Summit Singapore, You are in for a treat!',
        },
        null,
        2
      ),
    };
  };