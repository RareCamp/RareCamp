module.exports.handler = async (event) => {

    console.log(event);

    return {
        omim: '123',
        name: 'Foo',
    };
  };
