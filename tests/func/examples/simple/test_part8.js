/*
 * This is a basic func test for a UseCase application.
 */
YUI({
    useConsoleOutput: true,
    useBrowserConsole: true,
    logInclude: { TestRunner: true }
}).use('node', 'node-event-simulate', 'test', 'console', function (Y) {
   
         var suite = new Y.Test.Suite("Simple");

         suite.add(new Y.Test.Case({
         
             "test part8": function() {
                 Y.Assert.areEqual("My Mojit in the US", Y.one('h1').get('innerHTML'));
                 Y.Assert.areEqual("Mojito is Working.", Y.one('body').get('innerHTML').match(/Mojito is Working./gi));
             }
         }));    

         Y.Test.Runner.add(suite);
});

