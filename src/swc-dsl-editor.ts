Polymer({
    is: 'swc-dsl-editor'
});

rest('http://localhost:8080/DSL').then(function(response) {
    var json = JSON.parse(response.entity);
    document.getElementById('dslEditor').value = json.code;
});
